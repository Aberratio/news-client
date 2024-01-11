import { useHttp } from "common/hooks/useHttp";

import { GetArticlesLastRequest } from "./requests/GetArticlesLastRequest";
import { GetRunStatusRequest } from "./requests/GetRunStatusRequest";
import { PostCreateChatRequest } from "./requests/PostCreateChatRequest";
import { PostMessageRequest } from "./requests/PostMessageRequest";
import { PostRunChatRequest } from "./requests/PostRunChatRequest";
import { GetArticlesLastResponse } from "./responses/GetArticlesLastResponse";
import { GetRunStatusResponse } from "./responses/GetRunStatusResponse";
import { PostCreateChatResponse } from "./responses/PostCreateChatResponse";
import { PostMessageResponse } from "./responses/PostMessageResponse";
import { PostRunChatResponse } from "./responses/PostRunChatResponse";

export const useBasicApi = () => {
  const { get, post } = useHttp();
  const apiUrl = "http://localhost:3007/v1";

  const getArticlesLast = async (
    request: GetArticlesLastRequest,
  ): Promise<GetArticlesLastResponse[]> =>
    get<GetArticlesLastRequest, GetArticlesLastResponse[]>(
      `${apiUrl}/articles/last`,
      request,
    );

  const getRunStatus = async (
    request: GetRunStatusRequest,
  ): Promise<GetRunStatusResponse> =>
    get<GetRunStatusRequest, GetRunStatusResponse>(
      `${apiUrl}/threads/${request.threadId}/runs/${request.runId}`,
    );

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
    getArticlesLast,
    getRunStatus,
    postCreateChat,
    postMessage,
    postRunChat,
  };
};
