export const dynamic = "force-dynamic";

import { Metadata } from "next";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: params.slug,
    openGraph: {
      title: params.slug,
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
