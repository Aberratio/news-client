"use server";

import { GetArticleResponse } from "core/api/responses/GetArticleResponse";
import { formatDateToString } from "core/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildTabPath,
  buildArticlePath,
  buildPhotoPath,
} from "core/builders/buildPath";
import { FullArticleItem } from "types/FullArticleItem";

export const fetchArticle = async (
  articleId: number
): Promise<FullArticleItem> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/${articleId}`,
    { next: { revalidate: 60, tags: ["comments"] } }
  );

  return mapData((await response.json()) as GetArticleResponse);
};

const mapData = (data: GetArticleResponse): FullArticleItem => {
  return {
    author: {
      id: data.author.id,
      name: data.author.name,
      path: buildAuthorPath(data.author.id),
    },
    body: data.body,
    category: {
      id: data.category.id,
      name: data.category.name,
      path: buildCategoryPath(data.category.id),
      tabId: data.category.tabId,
      tabName: data.category.tabName,
      tabPath: buildTabPath(data.category.tabId),
    },
    createdOn: formatDateToString(data.createdOn),
    id: data.id,
    isArchived: data.isArchived,
    isPublished: data.isPublished,
    lead: data.lead,
    path: buildArticlePath(data.id),
    photos: data.photos.map((photo) => {
      return {
        description: photo.description,
        path: buildPhotoPath(photo.path),
      };
    }),
    statistics: {
      comments: data.commentsAmount ?? 0,
      dislikes: data.dislikes ?? 0,
      likes: data.likes ?? 0,
      views: data.views ?? 0,
    },
    title: data.title,
  };
};
