import { useHttp } from "common/hooks/useHttp";

import { GetChatMessagesRequest } from "./requests/GetChatMessagesRequest";
import { GetRunStatusRequest } from "./requests/GetRunStatusRequest";
import { PostCreateChatRequest } from "./requests/PostCreateChatRequest";
import { PostMessageRequest } from "./requests/PostMessageRequest";
import { PostRunChatRequest } from "./requests/PostRunChatRequest";
import { GetChatMessagesResponse } from "./responses/GetChatMessagesResponse";
import { GetRunStatusResponse } from "./responses/GetRunStatusResponse";
import { PostCreateChatResponse } from "./responses/PostCreateChatResponse";
import { PostMessageResponse } from "./responses/PostMessageResponse";
import { PostRunChatResponse } from "./responses/PostRunChatResponse";

export const useCopilotApi = () => {
  const { get, post } = useHttp();
  const apiUrl = "https://api.openai.com/v1";

  const getChatMessages = async (
    request: GetChatMessagesRequest,
  ): Promise<GetChatMessagesResponse> =>
    get<GetChatMessagesRequest, GetChatMessagesResponse>(
      `${apiUrl}/threads/${request.threadId}/messages`,
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
    getChatMessages,
    getRunStatus,
    postCreateChat,
    postMessage,
    postRunChat,
  };
};
