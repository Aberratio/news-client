import {
  buildArticlePath,
  buildAuthorPath,
  buildCategoryPath,
  buildTabPath,
} from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { ArticleItem } from "types/ArticleItem";

import { mapToPhotoItem } from "./SanityPhotoItem";

export interface SanityArticleItem {
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
  publishedAt: Date;
  slug: {
    current: string;
  };
  comments: number;
  title: string;
  likes: number;
  dislikes: number;
  views: number;
}

export const mapToArticleItem = (post: SanityArticleItem): ArticleItem => {
  return {
    _rev: post._rev,
    _id: post._id,
    author: {
      id: post.author.slug.current,
      name: post.author.name,
      path: buildAuthorPath(post.author.slug.current),
    },
    body: post.body,
    category: post.category
      ? {
          slug: post.category.slug.current,
          name: post.category.name,
          path: buildCategoryPath(post.category.slug.current),
          tabSlug: post.category.tab.slug.current,
          tabName: post.category.tab.name,
          tabPath: buildTabPath(post.category.tab.slug.current),
        }
      : {
          slug: "adds",
          name: "adds",
          path: "adds",
          tabSlug: "adds",
          tabName: "adds",
          tabPath: "adds",
        },
    createdOn: formatDateToString(post.publishedAt),
    comments: post.comments,
    slug: post.slug.current,
    lead: post.lead,
    likes: post.likes,
    dislikes: post.dislikes,
    views: post.views + 1,
    path: buildArticlePath(post.slug.current),
    photos: [
      mapToPhotoItem(post.mainImage),
      ...(post.images?.map((image) => mapToPhotoItem(image)) || []),
    ],
    title: post.title,
  };
};
