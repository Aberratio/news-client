"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { OrganizationContext } from "./OrganizationContext";
import { TabItem } from "types/TabItem";
import { FirstSiteItem } from "core/api/settings/fetchFirstSite";

interface OrganizationContextProviderProps {
  tabs: TabItem[];
  firstSite: FirstSiteItem;
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ tabs, firstSite, children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (tabs.length > 0 && firstSite.mainTopic.length > 0) {
      setIsReady(true);
    }
  }, [tabs, firstSite]);

  if (isReady) {
    return (
      <OrganizationContext.Provider value={{ tabs, firstSite }}>
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
