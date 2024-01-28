import { createContext } from "react";
import { TabItem } from "types/TabItem";

interface OrganizationContextProps {
  isReady: boolean;
  tabs: TabItem[];
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  isReady: false,
  tabs: [],
});
