import React from "react";

export interface IAuthContext {
  accessToken: string;
  fetchAccessToken(): Promise<string>;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);
