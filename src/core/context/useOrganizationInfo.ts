import { useContext } from "react";

import { OrganizationContext } from "./OrganizationContext";

export const useOrganizationInfo = () => {
  const { assistant, setAssistant } = useContext(OrganizationContext);

  return {
    assistant,
    setAssistant,
  };
};
