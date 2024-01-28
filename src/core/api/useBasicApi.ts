import { useHttp } from "core/hooks/useHttp";

import { GetArticlesLastRequest } from "./requests/GetArticlesLastRequest";
import { GetArticlesLastResponse } from "./responses/GetArticlesLastResponse";
import { GetArticleRequest } from "./requests/GetArticleRequest";
import { GetArticleResponse } from "./responses/GetArticleResponse";
import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";
import { GetPopularTitlesRequest } from "./requests/GetPopularTitlesRequest";
import { GetCommentsLastRequest } from "./requests/GetCommentsLastRequest";
import { GetCommentsLastResponse } from "./responses/GetCommentsLastResponse";
import { GetTabsResponse } from "./responses/GetTabsResponse";
import { PostVisitsRequest } from "./requests/PostVisitsRequest";

export const useBasicApi = () => {
  const { get, post } = useHttp();
  const apiUrl = "http://localhost:3007/v1";

  // ===================================
  // articles
  const getArticle = async (
    request: GetArticleRequest,
  ): Promise<GetArticleResponse> =>
    get<GetArticleRequest, GetArticleResponse>(
      `${apiUrl}/articles/${request.id}`,
    );

  const getArticlesLast = async (
    request: GetArticlesLastRequest,
  ): Promise<GetArticlesLastResponse[]> =>
    get<GetArticlesLastRequest, GetArticlesLastResponse[]>(
      `${apiUrl}/articles/last`,
      request,
    );

  const getPopularTitles = async (
    request: GetPopularTitlesRequest,
  ): Promise<GetPopularTitlesResponse[]> =>
    get<GetPopularTitlesRequest, GetPopularTitlesResponse[]>(
      `${apiUrl}/articles/popular`,
      request,
    );

  // ===================================
  // categories
  const getTabs = async (): Promise<GetTabsResponse[]> =>
    get<void, GetTabsResponse[]>(`${apiUrl}/categories/tabs`);

  // ===================================
  // comments
  const getCommentsLast = async (
    request: GetCommentsLastRequest,
  ): Promise<GetCommentsLastResponse[]> =>
    get<GetCommentsLastRequest, GetCommentsLastResponse[]>(
      `${apiUrl}/comments/last`,
      request,
    );

  // ===================================
  // admin
  const getVisits = async (): Promise<number> =>
    get<void, number>(`${apiUrl}/admin/visits`);

  const postVisits = async (request: PostVisitsRequest): Promise<number> =>
    post<PostVisitsRequest, number>(`${apiUrl}/admin/visits`, request);

  const postViews = async (request: PostVisitsRequest): Promise<number> =>
    post<PostVisitsRequest, number>(`${apiUrl}/admin/views`, request);

  return {
    // articles
    getArticle,
    getArticlesLast,
    getPopularTitles,

    // categories
    getTabs,

    // comments
    getCommentsLast,

    // admin
    getVisits,
    postViews,
    postVisits,
  };
};
