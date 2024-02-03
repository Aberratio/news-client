import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";
import { SectionContainer } from "components/organisms/SectionContainer/SectionContainer";
import { aboutPagePath } from "core/builders/buildPath";

const AboutPage = () => {
  const breadcrumbs: BreadCrumbsItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "O nas",
      path: aboutPagePath,
    },
  ];

  return (
    <SimplePageTemplate breadcrumbs={breadcrumbs}>
      <SectionContainer />
    </SimplePageTemplate>
  );
};

export default AboutPage;
