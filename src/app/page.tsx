export const dynamic = "force-dynamic";

import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";

import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";
import { HomePageTemplate } from "components/templates/HomePageTemplate/HomePageTemplate";

const HomePage = async () => {
  const articles = await fetchArticlesLast({
    limit: 61,
    page: 0,
  });

  if (!articles.length) {
    return <p>Brak artykułów</p>;
  }

  return (
    <HomePageTemplate article={articles[0]}>
      <ArticlesOverviewBox
        items={articles.slice(1)}
        dataTestId={`articles-overview-box-latest`}
      />
    </HomePageTemplate>
  );
};

export default HomePage;
