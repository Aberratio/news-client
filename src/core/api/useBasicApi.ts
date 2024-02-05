import { useHttp } from "core/hooks/useHttp";

import { GetArticlesLastRequest } from "./requests/GetArticlesLastRequest";
import { GetArticlesLastResponse } from "./responses/GetArticlesLastResponse";
import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";
import { GetPopularTitlesRequest } from "./requests/GetPopularTitlesRequest";
import { GetTabsResponse } from "./responses/GetTabsResponse";
import { PostVisitsRequest } from "./requests/PostVisitsRequest";

export const useBasicApi = () => {
  const { get, post } = useHttp();
  const apiUrl = process.env.NEXT_PUBLIC_BASIC_URL;

  // ===================================
  // articles

  const getArticlesLast = async (
    request: GetArticlesLastRequest
  ): Promise<GetArticlesLastResponse[]> =>
    get<GetArticlesLastRequest, GetArticlesLastResponse[]>(
      `${apiUrl}/articles/last`,
      request
    );

  const getPopularTitles = async (
    request: GetPopularTitlesRequest
  ): Promise<GetPopularTitlesResponse[]> =>
    get<GetPopularTitlesRequest, GetPopularTitlesResponse[]>(
      `${apiUrl}/articles/popular`,
      request
    );

  // ===================================
  // categories
  const getTabs = async (): Promise<GetTabsResponse[]> =>
    get<void, GetTabsResponse[]>(`${apiUrl}/categories/tabs`);

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
    getArticlesLast,
    getPopularTitles,

    // categories
    getTabs,

    // admin
    getVisits,
    postViews,
    postVisits,
  };
};
