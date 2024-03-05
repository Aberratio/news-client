"use client";

import { createContext } from "react";
import { OrganizationItem } from "types/OrganizationItem";

interface OrganizationContextProps {
  organization: OrganizationItem;
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  organization: {} as OrganizationItem,
});
