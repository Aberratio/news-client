"use server";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";
import { fetchArticleViews } from "core/api/articles/fetchArticleViews";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await fetchArticle(params.id)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });
  await fetchArticleViews({ articleSlug: params.id });

  if (!article) {
    return null;
  }

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
