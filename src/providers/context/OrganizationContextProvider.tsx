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
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] =
    useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (tabs.length > 0) {
      console.log(tabs);
      setIsReady(true);
    }
  }, [tabs]);

  if (isReady) {
    return (
      <OrganizationContext.Provider
        value={{ isMobileNavigationOpen, tabs, setIsMobileNavigationOpen }}
      >
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
