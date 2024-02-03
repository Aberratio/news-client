import BreadCrumbs from "components/molecules/BreadCrumbs";
import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

interface SimplePageTemplateProps {
  breadcrumbs: BreadCrumbsItem[];
  children: React.ReactNode;
}

export const SimplePageTemplate = ({
  breadcrumbs,
  children,
}: SimplePageTemplateProps) => {
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
