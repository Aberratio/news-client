import BreadCrumbs from "components/molecules/BreadCrumbs";
import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

interface SimplePageTemplateProps {
  breadcrumbs: BreadCrumbsItem[];
  name?: string;
  children: React.ReactNode;
}

export const SimplePageTemplate = ({
  breadcrumbs,
  name,
  children,
}: SimplePageTemplateProps) => {
  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MainContainerTemplate name={name}>{children}</MainContainerTemplate>
    </div>
  );
};
