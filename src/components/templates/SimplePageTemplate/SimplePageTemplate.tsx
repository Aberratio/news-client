import { BoxHeader } from "layout/section-header/BoxHeader";
import { useEffect } from "react";
import { useVisitCounter } from "layout/side-bar/visit-counter/useVisitCounter";
import BreadCrumbs from "components/molecules/BreadCrumbs";
import { BreadCrumbsItem } from "components/molecules/BreadCrumbs/BreadCrumbs";
import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";

interface SimplePageTemplateProps {
  breadcrumbs: BreadCrumbsItem[];
  name: string;
  children: React.ReactNode;
}

export const SimplePageTemplate = ({
  breadcrumbs,
  name,
  children,
}: SimplePageTemplateProps) => {
  const { incrementVisitsCounter } = useVisitCounter();

  useEffect(() => {
    incrementVisitsCounter(breadcrumbs.at(-1)?.path ?? "");
  }, []);

  return (
    <div>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <BoxHeader name={name} />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
