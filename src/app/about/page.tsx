"use server";

import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";
import { SectionContainer } from "components/organisms/SectionContainer/SectionContainer";

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
