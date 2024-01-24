import { ArticleSummarizationBoxHeader } from "articles/summarization/ArticleSummarizationBoxHeader";
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
      <ArticleSummarizationBoxHeader name="Panel administratora" />
    </div>
  );
};
