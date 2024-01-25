import { MainContainer } from "page/MainContainer";
import { NewsBar } from "../layout/home/NewsBar";
import { Wall } from "../layout/home/Wall";

export const HomePage = () => {
  return (
    <div data-test-id="home-page">
      <NewsBar />
      <MainContainer>
        <Wall />
      </MainContainer>
    </div>
  );
};
