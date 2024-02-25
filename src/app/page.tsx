"use server";

import OverviewWithStatsItems from "components/molecules/OverviewWithStatsItems";
import { HomePageTemplate } from "components/templates/HomePageTemplate/HomePageTemplate";
import { fetchArticlesLast } from "core/api/articles/fetchArticlesLast";

const HomePage = async () => {
  const articles = await fetchArticlesLast({
    limit: 61,
    page: 0,
  });

  return (
    <HomePageTemplate article={articles[0]}>
      <OverviewWithStatsItems
        items={articles.slice(1)}
        dataTestId={`article-summarizatoin-box-latest`}
      />
    </HomePageTemplate>
  );
};

export default HomePage;
