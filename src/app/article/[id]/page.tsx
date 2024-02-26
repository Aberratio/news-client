export const dynamic = "force-dynamic";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";
import { Suspense } from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  if (!params.id) {
    return null;
  }

  const article = await fetchArticle(params.id)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });

  if (!article || !article._id) {
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
      <Suspense>
        <FullArticle article={article} />
      </Suspense>
    </SimplePageTemplate>
  );
};

export default ArticlePage;
