"use server";

import { formatDateToString } from "core/builders/buildDate";
import {
  buildAuthorPath,
  buildCategoryPath,
  buildTabPath,
  buildArticlePath,
  buildPhotoPath,
} from "core/builders/buildPath";
import { GetArticlesLastRequest } from "./requests/GetArticlesLastRequest";
import { buildUrl } from "core/builders/buildUrl";
import { GetArticlesLastResponse } from "./responses/GetArticlesLastResponse";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

// {
//   category: categoryId,
//   limit: limit ?? 10,
//   page: page ?? 0,
// }

export const fetchArticlesLast = async (
  request: GetArticlesLastRequest
): Promise<ArticleSummarizationItem[]> => {
  const fullUrl = buildUrl(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/last`,
    request
  );

  const response = await fetch(fullUrl, {
    cache: "force-cache",
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
      id: item.id,
      path: buildArticlePath(item.id),
      photo: {
        description: item.photo.description,
        path: buildPhotoPath(item.photo.path),
      },
      statistics: {
        comments: 0,
        dislikes: 0,
        likes: 0,
        views: item.views ?? 0,
      },
      title: item.title,
    };
  });
