import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { useParams } from "react-router-dom";
import { useArticle } from "components/organisms/Article/useArticle";
import { useEffect } from "react";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

export const FullArticlePage = () => {
  const { article, isLoading, loadArticle } = useArticle();
  const { id } = useParams();

  useEffect(() => {
    id && loadArticle(Number(id));
  }, [id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  const breadcrumbs: BreadCrumbsItem[] = [
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
    <SimplePageTemplate breadcrumbs={breadcrumbs}>
      <FullArticle article={article} />
    </SimplePageTemplate>
  );
};
