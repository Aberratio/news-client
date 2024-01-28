import {
  ExpireTime,
  ExpireTimeUnit,
  useExpireTimeDate,
} from "./useExpireTimeDate";

interface CookieProps {
  name: string;
  value: string;
}

export const useCookies = () => {
  const { getExpireTimeDate } = useExpireTimeDate();

  const getRawCookie = (cookieName: string): string | null => {
    const name = `${cookieName}=`;
    const cookieList = document.cookie.split(";");
    for (let cookie of cookieList) {
      while (cookie.startsWith(" ")) {
        cookie = cookie.substring(1);
      }

      if (cookie.startsWith(name)) {
        return window.atob(cookie.substring(name.length, cookie.length));
      }
    }
    return null;
  };

  const getJson = (cookieName: string) => {
    const strCookie = getRawCookie(cookieName);

    if (strCookie !== "undefined" && strCookie !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(strCookie);
    }

    return undefined;
  };

  const getCookie = (cookieName: string, cookieFormat?: "json" | "raw") => {
    if (cookieFormat === "json") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return getJson(cookieName);
    }

    return getRawCookie(cookieName);
  };

  const getAllCookies = (): CookieProps[] => {
    const pairs = document.cookie.split(";");
    const cookies: CookieProps[] = [];

    for (const pair of pairs) {
      const pairValue = pair.split("=");
      cookies.push({ name: pairValue[0], value: pairValue[1] });
    }

    return cookies;
  };

  const setCookie = (name: string, value: string, time: ExpireTime) => {
    const date = getExpireTimeDate(time);
    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `${name}=${utoa(value)}; ${expires}; path=/`;
  };

  const setRawValueToCookie = (
    name: string,
    value: string,
    time: ExpireTime,
  ) => {
    const date = getExpireTimeDate(time);

    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  const setSessionCookie = (name: string, value: string) => {
    document.cookie = `${name}=${window.btoa(value)}`;
  };

  const removeCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return {
    getAllCookies,
    getCookie,
    setCookie,
    setRawValueToCookie,
    setSessionCookie,
    removeCookie,
  };
};

export const configCookies = {
  userLanguage: {
    name: "USER.LANGUAGE",
    expireTime: {
      value: 7,
      unit: ExpireTimeUnit.Day,
    },
  },
};

const utoa = (str: string) => {
  return Buffer.from(str, "utf8").toString("base64");
};
