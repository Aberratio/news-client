"use client";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { Suspense, useEffect, useState } from "react";
import { CategoryItem } from "types/CategoryItem";
import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface TabPageProps {
  params: { id: string };
}

const TabPage = ({ params }: TabPageProps) => {
  const { categories } = useOrganizationInfo();
  const [tabCategories, setTabCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    if (categories) {
      setTabCategories(
        categories.filter((category) => category.tabId === Number(params.id))
      );
    }
  }, [categories]);

  const createBreadcrumbFromCategory = (
    category: CategoryItem
  ): BreadCrumbsItem[] => {
    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      {
        name: category.tabName,
        path: `/tab/${category.tabId}`,
      },
    ];
  };

  if (!tabCategories.length) return null;

  return (
    <SimplePageTemplate
      breadcrumbs={createBreadcrumbFromCategory(tabCategories[0])}
    >
      {tabCategories.map((category) => {
        return (
          <Suspense key={category.id}>
            <ArticlesOverview category={category} />
          </Suspense>
        );
      })}
    </SimplePageTemplate>
  );
};

export default TabPage;
