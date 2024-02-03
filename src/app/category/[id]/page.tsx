"use client";

import { ArticlesOverview } from "components/organisms/Article/summarization/ArticlesOverview";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { useEffect, useState } from "react";
import { CategoryItem } from "types/CategoryItem";
import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface CategoryPageProps {
  params: { id: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { categories } = useOrganizationInfo();
  const [category, setCategory] = useState<CategoryItem>();

  useEffect(() => {
    if (categories) {
      const category = categories.find(
        (category) => category.id === Number(params.id)
      );
      if (category) {
        setCategory(category);
      }
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
      {
        name: category.name,
        path: `/category/${category.id}`,
      },
    ];
  };

  if (!category) return null;

  return (
    <SimplePageTemplate
      breadcrumbs={createBreadcrumbFromCategory(category)}
      name={category.name}
    >
      <ArticlesOverview category={category} />
    </SimplePageTemplate>
  );
};

export default CategoryPage;
