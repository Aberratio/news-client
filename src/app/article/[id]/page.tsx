"use server";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await fetchArticle(Number(params.id));

  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        currentName: article.title,
        categoryName: article.category.name,
        categoryPath: article.category.path,
      }}
    >
      <FullArticle article={article} />
    </SimplePageTemplate>
  );
};

export default ArticlePage;
