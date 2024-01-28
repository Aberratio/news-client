import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";
import { SectionContainer } from "components/organisms/SectionContainer/SectionContainer";

const AboutPage = () => {
  const breadcrumbs: BreadCrumbsItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "O nas",
      path: "/about",
    },
  ];

  return (
    <SimplePageTemplate breadcrumbs={breadcrumbs} name="Skład redakcji">
      <SectionContainer />
    </SimplePageTemplate>
  );
};

export default AboutPage;
