"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { OrganizationItem } from "types/OrganizationItem";

import { OrganizationContext } from "./OrganizationContext";

interface OrganizationContextProviderProps {
  organization: OrganizationItem;
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ organization, children }) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (organization.tabs.length > 0) {
      setIsReady(true);
    }
  }, [organization]);

  if (isReady) {
    return (
      <OrganizationContext.Provider value={{ organization }}>
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
