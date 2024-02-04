"use server";

import BreadCrumbs from "components/molecules/BreadCrumbs";
import { BreadCrumbsInfo } from "components/molecules/BreadCrumbs/useGenerateBreadcrumbs";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

interface SimplePageTemplateProps {
  breadCrubmsInfo: BreadCrumbsInfo;
  children: React.ReactNode;
}

export const SimplePageTemplate = ({
  breadCrubmsInfo,
  children,
}: SimplePageTemplateProps) => {
  return (
    <div>
      <BreadCrumbs breadCrubmsInfo={breadCrubmsInfo} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
