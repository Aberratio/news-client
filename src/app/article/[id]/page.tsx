"use client";

import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { useArticle } from "components/organisms/Article/useArticle";
import { useEffect } from "react";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface ArticlePageProps {
  params: { id: string };
}
const ArticlePage = ({ params }: ArticlePageProps) => {
  const { article, isLoading, loadArticle } = useArticle();

  useEffect(() => {
    params.id && loadArticle(Number(params.id));
  }, [params.id]);

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

export default ArticlePage;
