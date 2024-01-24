import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { ArticleSummarizationBox } from "articles/summarization/ArticleSummarizationBox";
import { ArticleSummarizationBoxHeader } from "articles/summarization/ArticleSummarizationBoxHeader";
import { useParams } from "react-router-dom";

export const CategoryPage = () => {
  const { id } = useParams();

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
      <ArticleSummarizationBoxHeader
        category={{
          id: Number(id),
          name: "Aktualności",
        }}
      />
      <MainContainer>
        <ArticleSummarizationBox
          category={{
            id: Number(id),
            name: "Aktualności",
          }}
          showSeeMore={false}
        />
      </MainContainer>
    </div>
  );
};
