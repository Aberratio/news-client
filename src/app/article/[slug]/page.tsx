export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { sanityClient } from "core/api/sanityClient";
import { buildImageUrl } from "core/builders/buildImageUrl";
// import type { Metadata, ResolvingMetadata } from "next";
import type { Metadata } from "next";

import { FullArticle } from "components/organisms/Article/full/FullArticle";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

import { fetchArticle } from "../../../core/api/articles/fetchArticle";

export const revalidate = 60;

type Props = Promise<{ slug: string }>;

export async function generateMetadata(
  { params }: { params: Props }
  // ,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const articleMeta = await sanityClient.fetch(
    `*[_type == "post" && slug.current == "${slug}" && !(_id in path('drafts.**'))][0]{ title, lead, mainImage}`
  );

  console.log({ articleMeta });
  console.log(articleMeta.mainImage.asset._ref);

  const imagePath = buildImageUrl(articleMeta.mainImage.asset._ref);
  console.log({ imagePath });
  // const previousImages = (await parent).openGraph?.images || [];
  const url = `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/article/${slug}`;

  return {
    metadataBase: new URL(url),
    title: articleMeta.title,
    description: articleMeta.lead,
    openGraph: {
      title: articleMeta.title,
      url,
      locale: "pl_PL",
      type: "article",
      description: articleMeta.lead,
      images: [{ url: imagePath, secureUrl: imagePath }],
    },
  };
}

type ArticlePageProps = Promise<{ slug: string }>;

const ArticlePage = async (props: { params: ArticlePageProps }) => {
  const { slug } = await props.params;

  if (!slug) {
    return null;
  }

  const article = await fetchArticle(slug)
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
