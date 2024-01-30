"use client";

import { createContext } from "react";
import { TabItem } from "types/TabItem";

interface OrganizationContextProps {
  tabs: TabItem[];
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  tabs: [],
});
