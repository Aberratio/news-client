"use server";

import { GetArticleResponse } from "core/api/responses/GetArticleResponse";

export const fetchArticle = async (
  articleId: number
): Promise<GetArticleResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASIC_URL}/articles/${articleId}`,
    {
      cache: "force-cache",
    }
  );

  const tabs = await response.json();

  return tabs;
};
