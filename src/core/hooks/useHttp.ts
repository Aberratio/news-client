/* eslint-disable @typescript-eslint/no-empty-function */

import { useCache } from "./useCache";
import { buildUrl } from "../builders/buildUrl";

interface RequestOptions extends RequestInit {
  signal?: AbortSignal;
}

export const useHttp = () => {
  const { getRequest } = useCache();

  const authorizedFetch = async <TResponse>(
    url: string,
    requestOptions: RequestOptions
  ): Promise<TResponse> => {
    return fetch(url, {
      ...requestOptions,
      credentials: "same-origin" as RequestCredentials,
      headers: {
        ...requestOptions.headers,
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((response: Response) => {
        setTimeout(() => {}, 500);

        if (!response.ok) {
          throw new Error(response.type);
        }

        const contentType = response.headers.get("content-type");
        return contentType && contentType.indexOf("application/json") !== -1
          ? response.json()
          : response.text();
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") {
          // request failed
          console.error(error);
        }
        return null;
      });
  };

  const get = async <TResponse>(
    url: string,
    parameters?: Record<string, any>,
    options?: HttpOptions
  ): Promise<TResponse> => {
    const fullUrl = buildUrl(url, parameters);

    if (!options?.cacheTimeoutMs) {
      return authorizedFetch(fullUrl, {
        method: "GET",
        signal: options?.signal,
      });
    }

    return getRequest(
      () =>
        authorizedFetch(fullUrl, {
          method: "GET",
          signal: options?.signal,
          cache: "force-cache",
        }),
      fullUrl,
      options.cacheTimeoutMs
    );
  };

  const post = async <TPayload, TResponse>(
    url: string,
    payload?: TPayload
  ): Promise<TResponse> => {
    return authorizedFetch(url, {
      method: "POST",
      body: JSON.stringify(payload) as unknown as ReadableStream<Uint8Array>,
    });
  };

  return { get, post };
};

interface HttpOptions {
  cacheTimeoutMs?: number;
  signal?: AbortSignal;
}
