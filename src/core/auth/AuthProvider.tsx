/* eslint-disable react/jsx-no-constructed-context-values */
import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import { useAuthentication } from "./useAuthentication";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getAccessToken, clearAuthOnLogoutFromAnotherTab, cleanup } =
    useAuthentication();

  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    if (accessToken === "") {
      getAccessToken().then((token) => {
        setAccessToken(token.accessToken);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const fetchAccessToken = async (): Promise<string> => {
    const decodedToken: { exp: number } = jwtDecode(accessToken);
    const expirationOffsetInSeconds = 5 * 60;
    const currentDateTimeInSeconds = Math.floor(Date.now() / 1000);

    if (
      currentDateTimeInSeconds >=
      decodedToken.exp - expirationOffsetInSeconds
    ) {
      const newToken = await getAccessToken();
      setAccessToken(newToken.accessToken);
    }

    return accessToken;
  };

  useEffect(() => {
    clearAuthOnLogoutFromAnotherTab();

    return () => {
      cleanup();
    };
  }, [clearAuthOnLogoutFromAnotherTab, cleanup]);

  if (accessToken) {
    return (
      <AuthContext.Provider value={{ accessToken, fetchAccessToken }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return <p>Spinner</p>;
};
