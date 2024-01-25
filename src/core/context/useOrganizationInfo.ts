import { useContext, useEffect, useState } from "react";

import { OrganizationContext } from "./OrganizationContext";
import { CategoryItem } from "types/CategoryItem";

export const useOrganizationInfo = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const { isReady, tabs } = useContext(OrganizationContext);

  useEffect(() => {
    setCategories(
      tabs.flatMap((tab) => {
        return tab.categories.map((category) => {
          return {
            id: category.id,
            name: category.name,
          };
        });
      }),
    );
  }, [tabs]);

  return {
    isReady,
    categories,
    tabs,
  };
};
