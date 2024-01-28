import { BoxHeader } from "components/molecules/BoxHeader/BoxHeader";
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
      {name && <BoxHeader name={name} />}
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
