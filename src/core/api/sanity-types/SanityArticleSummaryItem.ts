import {
  buildArticlePath,
  buildCategoryPath,
  buildTabPath,
} from "core/builders/buildPath";
import { formatDateToString } from "core/formaters/formatDateToString";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { mapToPhotoItem } from "./SanityPhotoItem";

export interface SanityArticleSummaryItem {
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
  publishedAt: Date;
  slug: {
    current: string;
  };
  title: string;
}

export const mapDataToArticleSummaryItems = (
  data: SanityArticleSummaryItem[]
): ArticleSummaryItem[] => {
  return data.map((post) => {
    return {
      author: {
        id: post.author.slug.current,
        name: post.author.name,
        path: post.author.slug.current,
      },
      category: {
        slug: post.category.slug.current,
        name: post.category.name,
        path: buildCategoryPath(post.category.slug.current),
        tabSlug: post.category.tab.slug.current,
        tabName: post.category.tab.name,
        tabPath: buildTabPath(post.category.tab.slug.current),
      },
      createdOn: formatDateToString(post.publishedAt),
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
      photo: mapToPhotoItem(post.mainImage),
      title: post.title,
    };
  });
};
