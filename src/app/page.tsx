export const dynamic = "force-dynamic";

import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";

import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";
import { HomePageTemplate } from "components/templates/HomePageTemplate/HomePageTemplate";

const HomePage = async () => {
  const articles = await fetchArticlesLast({
    limit: 60,
    page: 1,
    ignorePinnedPost: true,
  });

  if (!articles.length) {
    return <p>Brak artykułów</p>;
  }

  return (
    <HomePageTemplate>
      <ArticlesOverviewBox
        items={articles}
        dataTestId={`articles-overview-box-latest`}
      />
    </HomePageTemplate>
  );
};

export default HomePage;
