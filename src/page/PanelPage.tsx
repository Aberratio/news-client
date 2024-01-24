import { CategoryBoxHeader } from "articles/summarization/CategoryBoxHeader";
import { Breadcrumb, BreadcrumbItem } from "layout/breadcrumbs/Breadcrumb";

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
      <CategoryBoxHeader name="Panel administratora" />
    </div>
  );
};
