import { GetPopularTitlesResponse } from "core/api/responses/GetPopularTitlesResponse";
import { useArticlesApi } from "core/api/useArticlesApi";
import { useState } from "react";
import { TitleItem } from "./TitleItem";

export const usePopularTitles = () => {
  const { getPopularTitlesDetails } = useArticlesApi();
  const [titles, setTitles] = useState<TitleItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadPopulatTitles = (amount: number, from: number) => {
    getPopularTitlesDetails(amount, from).then((data) => {
      setTitles(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    titles,
    isLoading,
    loadPopulatTitles,
  };
};

const mapData = (data: GetPopularTitlesResponse[]): TitleItem[] =>
  data.map((item: GetPopularTitlesResponse, index: number) => {
    return {
      articleId: item.id,
      id: index,
      title: item.title,
    };
  });
