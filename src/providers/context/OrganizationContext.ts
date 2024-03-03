"use client";

import { createContext } from "react";
import { FirstSiteItem } from "types/FirstSiteItem";
import { TabItem } from "types/TabItem";

interface OrganizationContextProps {
  tabs: TabItem[];
  firstSite: FirstSiteItem;
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  tabs: [],
  firstSite: {} as FirstSiteItem,
});
