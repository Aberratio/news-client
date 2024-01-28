import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

export const PanelPage = () => {
  const breadcrumbs: BreadCrumbsItem[] = [
    {
      name: "Strona Główna",
      path: "/",
    },
    {
      name: "Panel",
      path: "/panel",
    },
  ];

  return (
    <SimplePageTemplate breadcrumbs={breadcrumbs} name="Panel administratora">
      <p>Test</p>
    </SimplePageTemplate>
  );
};
