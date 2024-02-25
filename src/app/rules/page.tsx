export const dynamic = "force-dynamic";

import { RulesPageTemplate } from "components/templates/RulesPageTemplate/RulesPageTemplate";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

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
