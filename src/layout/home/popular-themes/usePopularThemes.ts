import { GetPopularTitlesResponse } from "common/api/responses/GetPopularTitlesResponse";
import { useArticlesApi } from "common/api/useArticlesApi";
import { useState } from "react";

interface TitleItem {}

export const usePopularThemes = () => {
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
  data.map((item: GetPopularTitlesResponse) => {
    return item;
  });
