import { useHttp } from "core/hooks/useHttp";

import { GetArticlesLastRequest } from "./requests/GetArticlesLastRequest";
import { PostCreateChatRequest } from "./requests/PostCreateChatRequest";
import { PostMessageRequest } from "./requests/PostMessageRequest";
import { PostRunChatRequest } from "./requests/PostRunChatRequest";
import { GetArticlesLastResponse } from "./responses/GetArticlesLastResponse";
import { PostCreateChatResponse } from "./responses/PostCreateChatResponse";
import { PostMessageResponse } from "./responses/PostMessageResponse";
import { PostRunChatResponse } from "./responses/PostRunChatResponse";
import { GetArticleRequest } from "./requests/GetArticleRequest";
import { GetArticleResponse } from "./responses/GetArticleResponse";
import { GetPopularTitlesResponse } from "./responses/GetPopularTitlesResponse";
import { GetPopularTitlesRequest } from "./requests/GetPopularTitlesRequest";
import { GetCommentsLastRequest } from "./requests/GetCommentsLastRequest";
import { GetCommentsLastResponse } from "./responses/GetCommentsLastResponse";
import { GetTabsResponse } from "./responses/GetTabsResponse";

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
    get<void, GetTabsResponse[]>(`${apiUrl}/categories/tabs`, undefined, {
      cacheTimeoutMs: 1000 * 60 * 60 * 24,
    });

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

  // ===================================
  // to delete
  const postCreateChat = async (): Promise<PostCreateChatResponse> =>
    post<PostCreateChatRequest, PostCreateChatResponse>(`${apiUrl}/threads`);

  const postMessage = async (
    request: PostMessageRequest,
    threadId: string,
  ): Promise<PostMessageResponse> =>
    post<PostMessageRequest, PostMessageResponse>(
      `${apiUrl}/threads/${threadId}/messages`,
      request,
    );

  const postRunChat = async (
    request: PostRunChatRequest,
    threadId: string,
  ): Promise<PostRunChatResponse> =>
    post<PostRunChatRequest, PostRunChatResponse>(
      `${apiUrl}/threads/${threadId}/runs`,
      request,
    );

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

    // to delete
    postCreateChat,
    postMessage,
    postRunChat,
  };
};
