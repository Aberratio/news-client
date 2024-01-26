const eachRecursive = <TRequest>(
  url: string,
  obj: TRequest,
  objName = "",
): string => {
  for (const key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      url = eachRecursive(url, obj[key], key);
    } else if (obj[key] !== null && obj[key] !== undefined) {
      let key2 = key;

      if (objName !== "") {
        key2 = `${objName}.${key}` as Extract<keyof TRequest, string>;
      }

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const param = `${key2}=${obj[key]}`;

      url += (url.indexOf("?") !== -1 ? "&" : "?") + param;
    }
  }

  return url;
};

export const buildUrl = <TRequest>(
  url: string,
  parameters: TRequest,
): string => {
  return eachRecursive(url, parameters);
};

