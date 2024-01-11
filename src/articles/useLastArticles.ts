import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";
import { ArticleSummarizationItem } from "./summarization/ArticleSummarizationItem";
import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";

export const useLastArticles = () => {
  const { getLastArticlesDetails } = useArticlesApi();
  const [articles, setArticles] = useState<ArticleSummarizationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadArticles = (categoryId?: number) => {
    getLastArticlesDetails(categoryId).then((data) => {
      console.log(data);
      setArticles(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    articles,
    isLoading,
    loadArticles,
  };
};

const mapData = (
  data: GetArticlesLastResponse[],
): ArticleSummarizationItem[] => {
  return data;
};
