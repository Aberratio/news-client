import { Breadcrumb } from "layout/breadcrumbs/Breadcrumb";
import { MainContainer } from "./MainContainer";
import { FullArticle } from "articles/full/FullArticle";

export const FullArticlePage = () => {
  return (
    <div>
      <Breadcrumb />
      <MainContainer>
        <FullArticle />
      </MainContainer>
    </div>
  );
};
