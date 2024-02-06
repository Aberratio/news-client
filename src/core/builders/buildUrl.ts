export const buildUrl = (
  baseUrl: string,
  params?: Record<string, any>
): string => {
  if (!params) return baseUrl;

  const queryString = Object.entries(params)
    .map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return Object.entries(value)
          .map(
            ([nestedKey, nestedValue]) => `${key}.${nestedKey}=${nestedValue}`
          )
          .join("&");
      } else if (value !== null && value !== undefined) {
        return `${key}=${value}`;
      }
      return "";
    })
    .filter(Boolean)
    .join("&");

  return `${baseUrl}${queryString ? `?${queryString}` : ""}`;
};
