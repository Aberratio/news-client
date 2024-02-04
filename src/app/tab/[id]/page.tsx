"use server";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface TabPageProps {
  params: { id: string };
}

const TabPage = ({ params }: TabPageProps) => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        tabId: Number(params.id),
      }}
    >
      <ArticlesOverview categoryId={Number(params.id)} />
    </SimplePageTemplate>
  );
};

export default TabPage;
