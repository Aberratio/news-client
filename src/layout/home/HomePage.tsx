import { MainContainer } from "page/MainContainer";
import { NewsBar } from "./NewsBar";
import { PopularThemesBar } from "./PopularThemesBar";
import { Wall } from "./Wall";

export const HomePage = () => {
  return (
    <div>
      <PopularThemesBar />
      <NewsBar />
      <MainContainer>
        <Wall />
      </MainContainer>
    </div>
  );
};
