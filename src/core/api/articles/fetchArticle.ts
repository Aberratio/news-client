import { buildImageUrl } from "core/builders/buildImageUrl";
import { sanityClient } from "../sanityClient";
import {
  buildArticlePath,
  buildAuthorPath,
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

interface ArticleItem {
  author: AuthorItem;
  body: string;
  category: CategoryItem;
  createdOn: string;
  id: string;
  lead: string;
  path: string;
  photos: PhotoItem[];
  title: string;
}

interface SanityArticleItem {
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
    description?: string;
  };
  images?: {
    asset: {
      _ref: string;
    };
    alt: string;
    description?: string;
  }[];
  publishedAt: string;
  slug: {
    current: string;
  };
  title: string;
}

export const fetchArticle = async (slug: string): Promise<ArticleItem> => {
  const articles = await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}"]{ title, category->{ title, slug, tab->{title, slug }}, author->{name, slug}, lead, publishedAt, body, mainImage, slug, images}`,
    {},
    {
      method: "post",
      cache: "force-cache",
      next: { tags: ["pages"] },
    }
  );

  return mapData(articles[0]);
};

const mapData = (post: SanityArticleItem): ArticleItem => {
  return {
    author: {
      id: post.author.slug.current,
      name: post.author.name,
      path: buildAuthorPath(post.author.slug.current),
    },
    body: post.body,
    category: {
      id: post.category.slug.current,
      name: post.category.name,
      path: buildCategoryPath(post.category.slug.current),
      tabSlug: post.category.tab.slug.current,
      tabName: post.category.tab.name,
      tabPath: buildTabPath(post.category.tab.slug.current),
    },
    createdOn: post.publishedAt,
    id: post.slug.current,
    lead: post.lead,
    path: buildArticlePath(post.slug.current),
    photos: [
      {
        path: buildImageUrl(post.mainImage.asset._ref),
        description: post.mainImage.description || "",
      },
      ...(post.images?.map((image) => ({
        path: buildImageUrl(image.asset._ref),
        description: image.description || "",
      })) || []),
    ],
    title: post.title,
  };
};
