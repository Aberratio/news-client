import { useState } from "react";
import { useAsync } from "react-async";

import { useAsyncError } from "./useAsyncError";

type DeferFunction<TRequest, TResponse> = (
  request: TRequest,
  signal?: AbortSignal,
) => Promise<TResponse>;

export const useQuery = <TRequest = void, TResponse = void>({
  deferFn,
  onResolve,
  onReject,
}: {
  deferFn: DeferFunction<TRequest, TResponse>;
  onResolve?: (data: TResponse) => void;
  onReject?: (error: Error) => void;
}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const throwError = useAsyncError();

  const fetchResult = useAsync({
    deferFn: ([request, signal]) => deferFn(request, signal),
    onResolve: (data) => {
      if (onResolve) {
        onResolve(data);
      }

      setIsReady(true);
    },
    onReject:
      onReject ||
      ((error) => {
        throwError(error);
      }),
  });

  const run = (request?: TRequest, signal?: AbortSignal): void => {
    fetchResult.run(request, signal);
  };

  return {
    isLoading: !fetchResult.isResolved || !isReady || fetchResult.isLoading,
    isPending: fetchResult.isPending,
    isInitial: fetchResult.isInitial,
    isResolved: fetchResult.isResolved && isReady,
    status: fetchResult.status,
    data: fetchResult.data,
    run,
  };
};
