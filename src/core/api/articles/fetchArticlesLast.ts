"use server";

import { formatDateToString } from "core/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildTabPath,
  buildArticlePath,
  buildPhotoPath,
} from "core/builders/buildPath";
import { buildUrl } from "core/builders/buildUrl";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

export const fetchArticlesLast = async (
  request: GetArticlesLastRequest
): Promise<ArticleSummarizationItem[]> => {
  const fullUrl = buildUrl(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/last`,
    request
  );

  const response = await fetch(fullUrl, {
    next: { revalidate: 60, tags: ["comments"] },
  });

  return mapData((await response.json()) as GetArticlesLastResponse[]);
};

const mapData = (data: GetArticlesLastResponse[]): ArticleSummarizationItem[] =>
  data.map((item: GetArticlesLastResponse) => {
    return {
      author: {
        id: item.author.id,
        name: item.author.name,
        path: buildAuthorPath(item.author.id),
      },
      category: {
        id: item.category.id,
        name: item.category.name,
        path: buildCategoryPath(item.category.id),
        tabId: item.category.tabId,
        tabName: item.category.tabName,
        tabPath: buildTabPath(item.category.tabId),
      },
      createdOn: formatDateToString(item.createdOn),
      lead: item.lead,
      id: item.id,
      path: buildArticlePath(item.id),
      photo: {
        description: item.photo.description,
        path: buildPhotoPath(item.photo.path),
      },
      statistics: {
        comments: item.commentsAmount ?? 0,
        dislikes: item.dislikes ?? 0,
        likes: item.likes ?? 0,
        views: item.views ?? 0,
      },
      title: item.title,
    };
  });

interface GetArticlesLastRequest {
  categoryId?: number;
  limit: number;
  page?: number;
  tabId?: number;
}

interface GetArticlesLastResponse {
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    tabId: number;
    tabName: string;
  };
  commentsAmount: number;
  createdOn: Date;
  lead: string;
  id: number;
  photo: {
    description: string;
    path: string;
  };
  title: string;
  views: number;
  likes: number;
  dislikes: number;
}
