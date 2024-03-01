"use client";

import { FirstSiteItem } from "core/api/settings/fetchFirstSite";
import { createContext } from "react";
import { TabItem } from "types/TabItem";

interface OrganizationContextProps {
  tabs: TabItem[];
  firstSite: FirstSiteItem;
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  tabs: [],
  firstSite: {} as FirstSiteItem,
});
