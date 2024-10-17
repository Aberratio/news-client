export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import { SectionContainer } from "components/organisms/SectionContainer/SectionContainer";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "O nas",
};

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
