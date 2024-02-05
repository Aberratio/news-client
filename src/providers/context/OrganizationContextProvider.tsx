"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { OrganizationContext } from "./OrganizationContext";
import { TabItem } from "types/TabItem";

interface OrganizationContextProviderProps {
  tabs: TabItem[];
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ tabs, children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (tabs.length > 0) {
      setIsReady(true);
    }
  }, [tabs]);

  if (isReady) {
    return (
      <OrganizationContext.Provider value={{ tabs }}>
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
