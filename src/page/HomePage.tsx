import { MainContainer } from "page/MainContainer";
import { NewsBar } from "../layout/home/NewsBar";
import { PopularTitlesBar } from "../layout/home/popular-titles/PopularTitlesBar";
import { Wall } from "../layout/home/Wall";

export const HomePage = () => {
  return (
    <div data-test-id="home-page">
      <PopularTitlesBar />
      <NewsBar />
      <MainContainer>
        <Wall />
      </MainContainer>
    </div>
  );
};
