import { MainContainerTemplate } from "components/templates/MainContainerTemplate/MainContainerTemplate";
import { NewsBar } from "../../pages/HomePage/NewsBar";

interface HomePageTemplateProps {
  children: React.ReactNode;
}

export const HomePageTemplate = ({ children }: HomePageTemplateProps) => {
  return (
    <div data-test-id="home-page">
      <NewsBar />
      <MainContainerTemplate>{children}</MainContainerTemplate>
    </div>
  );
};
