"use client";

import { useContext, useEffect, useState } from "react";
import { buildCategoryPath, buildTabPath } from "core/builders/buildPath";
import { CategoryItem } from "types/CategoryItem";
import { FirstSiteItem } from "types/FirstSiteItem";
import { MainTopicItem } from "types/MainTopicItem";
import { TabItem } from "types/TabItem";

import { OrganizationContext } from "./OrganizationContext";

interface OrganizationInfoProps {
  categories: CategoryItem[];
  mainTopic: MainTopicItem | undefined;
  firstSite: FirstSiteItem | undefined;
  tabs: TabItem[];
}

export const useOrganizationInfo = (): OrganizationInfoProps => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const { organization } = useContext(OrganizationContext);

  useEffect(() => {
    setCategories(
      organization.tabs.flatMap((tab) => {
        return tab.categories.map((category) => {
          return {
            id: category.id,
            name: category.name,
            path: buildCategoryPath(category.id),
            tabSlug: category.tabSlug,
            tabName: category.tabName,
            tabPath: buildTabPath(category.tabSlug),
          };
        });
      })
    );
  }, [organization.tabs]);

  return {
    categories,
    mainTopic: organization.mainTopic,
    firstSite: organization.firstSite,
    tabs: organization.tabs,
  };
};
