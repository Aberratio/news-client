import { GetArticlesLastResponse } from "common/api/responses/GetArticlesLastResponse";
import { useBasicApi } from "common/api/useBasicApi";
import { GetArticleResponse } from "./responses/GetArticleResponse";

export const useArticlesApi = () => {
  const { getArticle, getArticlesLast } = useBasicApi();

  const getLastArticlesDetails = async (
    categoryId?: number,
  ): Promise<GetArticlesLastResponse[]> => {
    return await getArticlesLast({
      category: categoryId,
      limit: 10,
      page: 0,
    });
  };

  const getArticleDetails = async (
    articleId: number,
  ): Promise<GetArticleResponse> => {
    return await getArticle({
      id: articleId,
    });
  };

  return {
    getArticleDetails,
    getLastArticlesDetails,
  };
};
