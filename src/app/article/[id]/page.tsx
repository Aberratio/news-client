export const dynamic = "force-dynamic";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";
import { fetchArticleViews } from "core/api/articles/fetchArticleViews";
import { Suspense } from "react";

interface ArticlePageProps {
  params: { id: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const article = await fetchArticle(params.id)
    .then((res) => res)
    .catch((error) => {
      console.error(error);
    });

  try {
    await fetchArticleViews({ articleSlug: params.id });
  } catch (error) {
    console.error(error);
  }

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
      <Suspense>
        <FullArticle article={article} />
      </Suspense>
    </SimplePageTemplate>
  );
};

export default ArticlePage;
