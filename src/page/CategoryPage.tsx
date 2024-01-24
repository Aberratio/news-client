import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { CategoryBox } from "articles/summarization/CategoryBox";
import { CategoryBoxHeader } from "articles/summarization/CategoryBoxHeader";

export const CategoryPage = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "Aktualności",
      path: "category",
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <CategoryBoxHeader name="Aktualności" />
      <MainContainer>
        <CategoryBox categoryId={1} showHeader={false} />
      </MainContainer>
    </div>
  );
};
