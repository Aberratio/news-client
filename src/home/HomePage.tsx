import { NewsBar } from "./NewsBar";
import { PopularThemesBar } from "./PopularThemesBar";

export const HomePage = () => {
  return (
    <div>
      <PopularThemesBar />
      <NewsBar />
    </div>
  );
};
