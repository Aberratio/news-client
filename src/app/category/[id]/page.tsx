export const dynamic = "force-dynamic";

import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { SimplePageTemplate } from "components/templates/SimplePageTemplate/SimplePageTemplate";

interface CategoryPageProps {
  params: { id: string };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  return (
    <SimplePageTemplate
      breadCrubmsInfo={{
        categorySlug: params.id,
      }}
    >
      <ArticlesOverview categorySlug={params.id} />
    </SimplePageTemplate>
  );
};

export default CategoryPage;
