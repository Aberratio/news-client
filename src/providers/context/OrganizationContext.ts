"use client";

import { createContext } from "react";
import { TabItem } from "types/TabItem";

interface OrganizationContextProps {
  isMobileNavigationOpen: boolean;
  tabs: TabItem[];
  setIsMobileNavigationOpen: (isMobileNavigationOpen: boolean) => void;
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  isMobileNavigationOpen: false,
  tabs: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsMobileNavigationOpen: (isMobileNavigationOpen: boolean) => {},
});
