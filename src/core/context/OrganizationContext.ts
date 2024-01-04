import { createContext } from "react";

export interface Assistant {
  assistant_id: string;
}

interface OrganizationContextProps {
  assistant: Assistant;
  setAssistant: (assistant: Assistant) => void;
}

export const OrganizationContext = createContext<OrganizationContextProps>({
  assistant: {} as Assistant,
  setAssistant: () => {},
});
