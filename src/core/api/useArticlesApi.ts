import { GetArticlesLastResponse } from "core/api/responses/GetArticlesLastResponse";
import { useBasicApi } from "core/api/useBasicApi";
import { GetArticleResponse } from "./responses/GetArticleResponse";
import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";

export const useArticlesApi = () => {
  const { getArticle, getArticlesLast, getPopularTitles } = useBasicApi();

  const getArticleDetails = async (
    articleId: number
  ): Promise<GetArticleResponse> => {
    return await getArticle({
      id: articleId,
    });
  };

  const getLastArticlesDetails = async (
    categoryId?: number,
    limit?: number,
    page?: number
  ): Promise<GetArticlesLastResponse[]> => {
    return await getArticlesLast({
      category: categoryId,
      limit: limit ?? 10,
      page: page ?? 0,
    });
  };

  const getPopularTitlesDetails = async (
    amount: number,
    from: number
  ): Promise<GetPopularTitlesResponse[]> => {
    return await getPopularTitles({
      amount,
      from,
    });
  };

  return {
    getArticleDetails,
    getLastArticlesDetails,
    getPopularTitlesDetails,
  };
};
