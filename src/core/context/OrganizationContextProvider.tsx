import React, { ReactNode, useEffect, useState } from "react";

import { OrganizationContext } from "./OrganizationContext";
import { TabItem } from "types/TabItem";
import { useCategories } from "layout/navigation/useCategories";

interface OrganizationContextProviderProps {
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ children }) => {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  const { tabs: tabsFromApi, loadTabs, isLoading } = useCategories();

  useEffect(() => {
    console.log("OrganizationContextProvider");
    loadTabs();
  }, []);

  useEffect(() => {
    setTabs(tabsFromApi);
  }, [tabsFromApi]);

  useEffect(() => {
    !isLoading && setIsReady(true);
  }, [isLoading]);

  if (isReady) {
    return (
      <OrganizationContext.Provider value={{ isReady, tabs }}>
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
