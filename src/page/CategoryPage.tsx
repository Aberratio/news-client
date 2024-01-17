import { Breadcrumb } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { CategoryBox } from "articles/summarization/CategoryBox";
import { CategoryBoxHeader } from "articles/summarization/CategoryBoxHeader";

export const CategoryPage = () => {
  return (
    <div>
      <Breadcrumb />
      <CategoryBoxHeader name="Aktualności" />
      <MainContainer>
        <CategoryBox categoryId={1} showHeader={false} />
      </MainContainer>
    </div>
  );
};
