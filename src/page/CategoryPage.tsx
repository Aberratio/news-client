import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { ArticleSummarizationBox } from "articles/summarization/ArticleSummarizationBox";
import { ArticleSummarizationBoxHeader } from "articles/summarization/ArticleSummarizationBoxHeader";

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
      <ArticleSummarizationBoxHeader name="Aktualności" />
      <MainContainer>
        <ArticleSummarizationBox categoryId={1} showSeeMore={false} />
      </MainContainer>
    </div>
  );
};
