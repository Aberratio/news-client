import { useState } from "react";

export const useAuthentication = () => {
  const { clearStorageOnInvalidToken, clearSubscriptions } =
    useLoggingStorage();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const getAccessToken = async (): Promise<{ accessToken: string }> => {
    setIsAuthenticated(true);
    return requestAccessToken();
  };

  const clearAuthInfoOnInvalidToken = () => {
    clearStorageOnInvalidToken();
  };

  const cleanup = () => {
    clearSubscriptions();
  };

  const clearAuthOnLogoutFromAnotherTab = () => {
    clearStorageOnInvalidToken();
  };

  return {
    isAuthenticated,
    cleanup,
    clearAuthInfoOnInvalidToken,
    clearAuthOnLogoutFromAnotherTab,
    getAccessToken,
  };
};

const useLoggingStorage = () => {
  const handleInvalidToken = (e: StorageEvent) => {
    if (
      e.key === "isLoggedIn" &&
      e.oldValue === "true" &&
      e.newValue === "false"
    ) {
      localStorage.clear();
      window.location.replace("/");
    }
  };

  const saveLoggedIn = (isLoggedIn: boolean) => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  };

  const clearStorageOnInvalidToken = () => {
    window.addEventListener("storage", handleInvalidToken);
  };

  const clearSubscriptions = () => {
    window.removeEventListener("storage", handleInvalidToken);
  };

  return {
    clearStorageOnInvalidToken,
    clearSubscriptions,
    saveLoggedIn,
  };
};

const requestAccessToken = async (): Promise<{ accessToken: string }> => {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise<{ accessToken: string }>(async (resolve) => {
    const response = await fetch(`/api/auth`, { method: "GET" });
    const data = await response.json();
    resolve({ accessToken: data.access_token });
  });
};
