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
  _id: string;
  _rev: string;
  author: AuthorItem;
  body: string;
  category: CategoryItem;
  createdOn: string;
  slug: string;
  lead: string;
  likes: number;
  dislikes: number;
  views: number;
  path: string;
  photos: PhotoItem[];
  title: string;
  comments: number;
}

interface SanityArticleItem {
  _id: string;
  _rev: string;
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
  comments: number;
  title: string;
  likes: number;
  dislikes: number;
  views: number;
}

export const fetchArticle = async (slug: string): Promise<ArticleItem> => {
  try {
    const articles = await sanityClient.fetch(
      `*[_type == "post" && slug.current == "${slug}"]{ _id, _rev, "comments": count(*[_type == "comment" && references(^._id)]), likes, dislikes, views, title, category->{ title, slug, tab->{title, slug }}, author->{name, slug}, lead, publishedAt, body, mainImage, slug, images}`
    );

    sanityClient.patch(articles[0]._id).inc({ views: 1 }).commit();

    return mapData(articles[0]);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching article");
  }
};

const mapData = (post: SanityArticleItem): ArticleItem => {
  return {
    _rev: post._rev,
    _id: post._id,
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
    comments: post.comments,
    slug: post.slug.current,
    lead: post.lead,
    likes: post.likes,
    dislikes: post.dislikes,
    views: post.views + 1,
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
