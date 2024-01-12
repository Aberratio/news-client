import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";
import { GetArticleResponse } from "common/api/responses/GetArticleResponse";
import { FullArticleItem } from "./full/FullArticleItem";

export const useArticle = () => {
  const { getArticleDetails } = useArticlesApi();
  const [article, setArticle] = useState<FullArticleItem>(
    {} as FullArticleItem,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticle = (articleId: number) => {
    getArticleDetails(articleId).then((data) => {
      setArticle(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    article,
    isLoading,
    loadArticle,
  };
};

const mapData = (data: GetArticleResponse): FullArticleItem => {
  return data;
};
