"use server";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface CategoryPageProps {
  params: { id: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        categoryId: params.id,
      }}
    >
      <ArticlesOverview categoryId={Number(params.id)} />
    </SimplePageTemplate>
  );
};

export default CategoryPage;
