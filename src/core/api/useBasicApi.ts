import { useHttp } from "core/hooks/useHttp";

import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";
import { GetPopularTitlesRequest } from "./requests/GetPopularTitlesRequest";
import { GetTabsResponse } from "./responses/GetTabsResponse";
import { PostVisitsRequest } from "./requests/PostVisitsRequest";

export const useBasicApi = () => {
  const { get, post } = useHttp();
  const apiUrl = process.env.NEXT_PUBLIC_BASIC_URL;

  // ===================================
  // articles
  const getPopularTitles = async (
    request: GetPopularTitlesRequest
  ): Promise<GetPopularTitlesResponse[]> =>
    get<GetPopularTitlesResponse[]>(`${apiUrl}/articles/popular`, request);

  // ===================================
  // categories
  const getTabs = async (): Promise<GetTabsResponse[]> =>
    get<GetTabsResponse[]>(`${apiUrl}/categories/tabs`);

  // ===================================
  // admin
  const getVisits = async (): Promise<number> =>
    get<number>(`${apiUrl}/admin/visits`);

  const postVisits = async (request: PostVisitsRequest): Promise<number> =>
    post<PostVisitsRequest, number>(`${apiUrl}/admin/visits`, request);

  const postViews = async (request: PostVisitsRequest): Promise<number> =>
    post<PostVisitsRequest, number>(`${apiUrl}/admin/views`, request);

  return {
    // articles
    getPopularTitles,

    // categories
    getTabs,

    // admin
    getVisits,
    postViews,
    postVisits,
  };
};
