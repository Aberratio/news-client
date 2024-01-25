import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { ArticlesOverview } from "articles/summarization/ArticlesOverview";
import { ArticlesOverviewHeader } from "articles/summarization/ArticlesOverviewHeader";
import { useParams } from "react-router-dom";
import { useOrganizationInfo } from "core/context/useOrganizationInfo";
import { useEffect, useState } from "react";
import { CategoryItem } from "types/CategoryItem";

export const CategoryPage = () => {
  const { id } = useParams();
  const { categories } = useOrganizationInfo();
  const [category, setCategory] = useState<CategoryItem>();

  useEffect(() => {
    if (categories) {
      const category = categories.find(
        (category) => category.id === Number(id),
      );
      if (category) {
        setCategory(category);
      }
    }
  }, [categories]);

  const createBreadcrumbFromCategory = (
    category: CategoryItem,
  ): BreadcrumbItem[] => {
    return [
      {
        name: "Strona Główna",
        path: "/",
      },
      // {
      //   name: category.tabName,
      //   path: `/tab/${category.tabId}`,
      // },
      {
        name: category.name,
        path: `/category/${category.id}`,
      },
    ];
  };

  if (!category) return null;

  return (
    <div>
      <Breadcrumb breadcrumbs={createBreadcrumbFromCategory(category)} />
      <ArticlesOverviewHeader category={category} />
      <MainContainer>
        <ArticlesOverview category={category} showSeeMore={false} />
      </MainContainer>
    </div>
  );
};
