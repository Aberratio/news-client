"use server";

import { GetArticleResponse } from "core/api/responses/GetArticleResponse";

export const fetchArticle = async (
  articleId: number
): Promise<GetArticleResponse> => {
  const response = await fetch(
    `http://localhost:3007/v1/articles/${articleId}`,
    {
      cache: "force-cache",
    }
  );

  const tabs = await response.json();

  return tabs;
};
