import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { FullArticle } from "articles/full/FullArticle";
import { useParams } from "react-router-dom";
import { useArticle } from "articles/useArticle";
import { useEffect } from "react";

export const FullArticlePage = () => {
  const { article, isLoading, loadArticle } = useArticle();
  const { id } = useParams();

  useEffect(() => {
    id && loadArticle(Number(id));
  }, [id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: article.category.name,
      path: article.category.path,
    },
    {
      name: article.title,
      path: "/article",
    },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <MainContainer>
        <FullArticle article={article} />
      </MainContainer>
    </div>
  );
};
