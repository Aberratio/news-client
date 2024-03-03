export const dynamic = "force-dynamic";

import { SectionContainer } from "components/organisms/SectionContainer/SectionContainer";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

const AboutPage = () => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        currentName: "O nas",
      }}
    >
      <SectionContainer />
    </SimplePageTemplate>
  );
};

export default AboutPage;
