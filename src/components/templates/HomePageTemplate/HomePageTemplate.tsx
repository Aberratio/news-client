import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";
import { NewsBar } from "../../../layout/home/NewsBar";
import { Wall } from "../../../layout/home/Wall";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = ({ children }: HomePageTemplateProps) => {
  return (
    <div data-test-id="home-page">
      <NewsBar />
      <MainContainerTemplate>
        {children}
        <Wall />
      </MainContainerTemplate>
    </div>
  );
};
