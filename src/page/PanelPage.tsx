import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";
import { BoxHeader } from "layout/section-header/BoxHeader";

export const PanelPage = () => {
  const breadcrumbs: BreadcrumbItem[] = [
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
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <BoxHeader name="Panel administratora" />
    </div>
  );
};
