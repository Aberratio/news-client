import { CategoryBoxHeader } from "articles/summarization/CategoryBoxHeader";
import { Breadcrumb } from "layout/breadcrumbs/Breadcrumb";

export const PanelPage = () => {
  return (
    <div>
      <Breadcrumb />
      <CategoryBoxHeader name="Panel administratora" />
    </div>
  );
};
