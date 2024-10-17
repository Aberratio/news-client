export const dynamic = "force-dynamic";

import { Metadata } from "next";

import { RulesPageTemplate } from "components/templates/RulesPageTemplate/RulesPageTemplate";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Regulamin",
};

const RulesPage = () => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        currentName: "Regulamin",
      }}
    >
      <RulesPageTemplate />
    </SimplePageTemplate>
  );
};

export default RulesPage;
