import { buildImageUrl } from "core/builders/buildImageUrl";
import { sanityClient } from "../sanityClient";
import {
  buildArticlePath,
  buildCategoryPath,
  buildTabPath,
} from "core/builders/buildPath";

interface AuthorItem {
  id: string;
  name: string;
  path: string;
}

interface CategoryItem {
  id: string;
  name: string;
  path: string;
  tabSlug: string;
  tabName: string;
  tabPath: string;
}

interface PhotoItem {
  path: string;
  description: string;
}

interface StatisticsItem {
  comments: number;
  dislikes: number;
  likes: number;
  views: number;
}

interface ArticleSummarizationItem {
  author: AuthorItem;
  category: CategoryItem;
  createdOn: string;
  id: string;
  lead: string;
  likes: number;
  comments: number;
  dislikes: number;
  views: number;
  path: string;
  photo: PhotoItem;
  statistics: StatisticsItem;
  title: string;
}

interface SanityArticleSummarizationItem {
  author: {
    name: string;
    slug: {
      current: string;
    };
  };
  body: any;
  category: {
    name: string;
    slug: {
      current: string;
    };
    tab: {
      name: string;
      slug: {
        current: string;
      };
    };
  };
  lead: string;
  likes: number;
  dislikes: number;
  comments: number;
  views: number;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
    description: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  title: string;
}

interface FetchArticlesLastParams {
  categorySlug?: string;
  tabSlug?: string;
  limit?: number;
  page?: number;
}

export const fetchArticlesLast = async ({
  categorySlug,
  tabSlug,
  limit = 10,
  page = 1,
}: FetchArticlesLastParams): Promise<ArticleSummarizationItem[]> => {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const tabs = await sanityClient.fetch(
    `*[_type == "post" ${
      categorySlug ? `&& category->slug.current == "${categorySlug}"` : ""
    } ${
      tabSlug ? `&& category->tab->slug.current == "${tabSlug}"` : ""
    }]{ title, likes, dislikes,  "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug} | order(publishedAt desc) [${start}..${end}]`
  );

  return mapData(tabs);
};

const mapData = (
  data: SanityArticleSummarizationItem[]
): ArticleSummarizationItem[] => {
  return data.map((post) => {
    return {
      author: {
        id: post.author.slug.current,
        name: post.author.name,
        path: post.author.slug.current,
      },
      category: {
        id: post.category.slug.current,
        name: post.category.name,
        path: buildCategoryPath(post.category.slug.current),
        tabSlug: post.category.tab.slug.current,
        tabName: post.category.tab.name,
        tabPath: buildTabPath(post.category.tab.slug.current),
      },
      createdOn: new Date(post.publishedAt).toLocaleDateString(),
      id: post.slug.current,
      lead: post.lead,
      likes: post.likes,
      comments: post.comments,
      dislikes: post.dislikes,
      views: post.views,
      path: buildArticlePath(post.slug.current),
      statistics: {
        comments: 0,
        dislikes: 0,
        likes: 0,
        views: 0,
      },
      photo: {
        path: buildImageUrl(post.mainImage.asset._ref),
        description: post.mainImage.description,
      },
      title: post.title,
    };
  });
};
