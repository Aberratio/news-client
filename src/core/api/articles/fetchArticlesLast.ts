import { buildImageUrl } from "core/builders/buildImageUrl";
import { sanityClient } from "../sanityClient";
import {
  buildArticlePath,
  buildCategoryPath,
  buildTabPath,
} from "core/builders/buildPath";

interface AuthorItem {
  id: number | string;
  name: string;
  path: string;
}

interface CategoryItem {
  id: number | string;
  name: string;
  path: string;
  tabId: string;
  tabName: string;
  tabPath: string;
}

interface PhotoItem {
  path: string;
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
  id: number | string;
  lead: string;
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
  mainImage: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
  publishedAt: string;
  slug: {
    current: string;
  };
  title: string;
}

interface FetchArticlesLastParams {
  categoryId?: number;
  tabId?: number;
  limit?: number;
  page?: number;
}

export const fetchArticlesLast = async ({
  categoryId,
  tabId,
  limit,
  page,
}: FetchArticlesLastParams): Promise<ArticleSummarizationItem[]> => {
  console.log({ categoryId, tabId, limit, page });

  const tabs = await sanityClient.fetch(
    '*[_type == "post"]{ title, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug}'
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
        tabId: post.category.tab.slug.current,
        tabName: post.category.tab.name,
        tabPath: buildTabPath(post.category.tab.slug.current),
      },
      createdOn: post.publishedAt,
      id: post.slug.current,
      lead: post.lead,
      path: buildArticlePath(post.slug.current),
      statistics: {
        comments: 0,
        dislikes: 0,
        likes: 0,
        views: 0,
      },
      photo: {
        path: buildImageUrl(post.mainImage.asset._ref),
      },
      title: post.title,
    };
  });
};
