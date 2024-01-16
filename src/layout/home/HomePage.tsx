import { MainContainer } from "page/MainContainer";
import { NewsBar } from "./NewsBar";
import { PopularTitlesBar } from "./popular-titles/PopularTitlesBar";
import { Wall } from "./Wall";

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
