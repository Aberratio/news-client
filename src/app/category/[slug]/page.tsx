export const dynamic = "force-dynamic";

import { capitalizeFirstLetter } from "core/tools/capitalizeFirstLetter";
import { Metadata } from "next";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const slug = capitalizeFirstLetter(params.slug);

  return {
    title: slug,
    openGraph: {
      title: slug,
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
