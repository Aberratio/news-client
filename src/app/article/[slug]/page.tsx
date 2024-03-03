export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { sanityClient } from "core/api/sanityClient";
import { buildImageUrl } from "core/builders/buildImageUrl";
import type { Metadata, ResolvingMetadata } from "next";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const articleMeta = await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}" && !(_id in path('drafts.**'))][0]{ title, lead, mainImage}`
  );

  const imagePath = buildImageUrl(articleMeta.mainImage.asset._ref);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: articleMeta.title,
    description: articleMeta.lead,
    openGraph: {
      title: articleMeta.title,
      description: articleMeta.lead,
      images: [imagePath, ...previousImages],
    },
  };
}

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
  if (!params.slug) {
    return null;
  }

  const article = await fetchArticle(params.slug)
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
