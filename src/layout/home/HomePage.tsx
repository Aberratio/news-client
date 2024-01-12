import { MainContainer } from "page/MainContainer";
import { NewsBar } from "./NewsBar";
import { PopularThemesBar } from "./PopularThemesBar";
import { Wall } from "./Wall";

export const HomePage = () => {
  return (
    <div data-test-id="home-page">
      <PopularThemesBar />
      <NewsBar />
      <MainContainer>
        <Wall />
      </MainContainer>
    </div>
  );
};
