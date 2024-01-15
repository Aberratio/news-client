import { MainContainer } from "page/MainContainer";
import { NewsBar } from "./NewsBar";
import { PopularTitlesBar } from "./PopularTitlesBar";
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
