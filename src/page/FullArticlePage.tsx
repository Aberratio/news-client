import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { FullArticle } from "articles/full/FullArticle";

export const FullArticlePage = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "Page",
      path: "/page",
    },
    {
      name: "Aktualności",
      path: "c/ategory",
    },
    {
      name: "Artykuł",
      path: "/article",
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <MainContainer>
        <FullArticle />
      </MainContainer>
    </div>
  );
};
