import { ArticlesOverview } from "components/organisms/Article/ArticlesOverview";
import { HomePageTemplate } from "components/templates/HomePageTemplate/HomePageTemplate";

const HomePage = () => {
  return (
    <HomePageTemplate>
      <ArticlesOverview amount={60} />
    </HomePageTemplate>
  );
};

export default HomePage;
