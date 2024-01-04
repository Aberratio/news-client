/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode, useEffect, useState } from "react";

import { Assistant, OrganizationContext } from "./OrganizationContext";

interface OrganizationContextProviderProps {
  children: ReactNode;
}

export const OrganizationContextProvider: React.FC<
  OrganizationContextProviderProps
> = ({ children }) => {
  const [assistant, setAssistant] = useState<Assistant>({
    assistant_id: "asst_smJu7GczcrlALNksrdDWmOHF",
  });

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (isReady) {
    return (
      <OrganizationContext.Provider
        value={{
          assistant,
          setAssistant,
        }}
      >
        {children}
      </OrganizationContext.Provider>
    );
  }
  return null;
};
