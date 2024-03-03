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

interface TabPageProps {
  params: { slug: string };
}

const TabPage = ({ params }: TabPageProps) => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        tabSlug: params.slug,
      }}
    >
      <ArticlesOverview tabSlug={params.slug} />
    </SimplePageTemplate>
  );
};

export default TabPage;
