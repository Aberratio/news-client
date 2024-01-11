import { useArticlesApi } from "common/api/useArticlesApi";
import { useQuery } from "common/hooks/useQuery";
import { useEffect, useState } from "react";
import { ArticleSummarizationItem } from "./summarization/ArticleSummarizationItem";
import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";

export const useLastArticles = () => {
  const { getLastArticlesDetails } = useArticlesApi();
  const [articles, setArticles] = useState<ArticleSummarizationItem[]>([]);

  const getLastArticlesQuery = useQuery({
    deferFn: getLastArticlesDetails,
    onResolve: (data) => {
      setArticles(mapData(data));
    },
    onReject: (e) => {
      console.warn(e);
    },
  });

  useEffect(() => {
    console.log("jestem!");
    getLastArticlesQuery.run();
  }, []);

  return {
    articles,
    isLoading: getLastArticlesQuery.isLoading,
  };
};

const mapData = (
  data: GetArticlesLastResponse[],
): ArticleSummarizationItem[] => {
  return data;
};
