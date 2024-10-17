export const dynamic = "force-dynamic";

import { sanityClient } from "core/api/sanityClient";
import { buildImageUrl } from "core/builders/buildImageUrl";
import { Metadata, ResolvingMetadata } from "next";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const categoryMeta = await sanityClient.fetch(
    `*[_type == "category" && slug.current == "${slug}" && !(_id in path('drafts.**'))][0]{ name, description, image}`
  );

  const imagePath = buildImageUrl(categoryMeta.image.asset._ref);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: categoryMeta.name,
    description: categoryMeta.description,
    openGraph: {
      title: categoryMeta.name,
      url: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/category/${slug}`,
      locale: "pl_PL",
      type: "website",
      description: categoryMeta.description,
      images: [imagePath, ...previousImages],
    },
  };
}

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        categorySlug: params.slug,
      }}
    >
      <ArticlesOverview categorySlug={params.slug} />
    </SimplePageTemplate>
  );
};

export default CategoryPage;
