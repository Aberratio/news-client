export const useCache = () => {
  const getRequest = <T>(
    request: () => Promise<T>,
    key: string,
    lifetime: number,
  ): Promise<T> => {
    if (!cachedRequests[key]) {
      const timeoutId = window.setTimeout(() => {
        delete cachedRequests[key];
      }, lifetime);
      cachedRequests[key] = {
        promise: request(),
        timeoutId,
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return cachedRequests[key].promise;
  };
  return { getRequest };
};

const cachedRequests: Record<
  string,
  {
    promise: Promise<any>;
    timeoutId: number;
  }
> = {};
