"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { OrganizationContext } from "./OrganizationContext";
import { TabItem } from "types/TabItem";

interface OrganizationContextProviderProps {
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ children }) => {
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTabs().then((tabs) => {
          setTabs(tabs);
        });
      } catch (error) {
        // Handle error
      } finally {
        setIsReady(true);
      }
    };

    fetchData();
  }, []);

  if (isReady) {
    return (
      <OrganizationContext.Provider value={{ isReady, tabs }}>
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};

const fetchTabs = async (): Promise<TabItem[]> => {
  ("use server");
  const response = await fetch("http://localhost:3007/v1/categories/tabs", {
    cache: "force-cache",
  });

  const tabs = await response.json();

  return tabs;
};
