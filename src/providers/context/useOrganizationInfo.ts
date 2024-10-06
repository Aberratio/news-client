"use client";

import { useContext, useEffect, useState } from "react";
import { buildCategoryPath, buildTabPath } from "core/builders/buildPath";
import { CategoryItem } from "types/CategoryItem";
import { FirstSiteItem } from "types/FirstSiteItem";
import { GeneralConfigItem } from "types/GeneralConfigItem";
import { MainTopicItem } from "types/MainTopicItem";
import { TabItem } from "types/TabItem";

import { OrganizationContext } from "./OrganizationContext";

interface OrganizationInfoProps {
  categories: CategoryItem[];
  firstSite?: FirstSiteItem;
  generalConfig?: GeneralConfigItem;
  mainTopic?: MainTopicItem;
  tabs: TabItem[];
}

export const useOrganizationInfo = (): OrganizationInfoProps => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const { organization } = useContext(OrganizationContext);

  console.log(organization);

  useEffect(() => {
    setCategories(
      organization.tabs.flatMap((tab) => {
        return tab.categories.map((category) => {
          return {
            slug: category.slug,
            name: category.name,
            path: buildCategoryPath(category.slug),
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
    firstSite: organization.firstSite,
    generalConfig: organization.generalConfig,
    mainTopic: organization.mainTopic,
    tabs: organization.tabs,
  };
};
