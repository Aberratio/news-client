import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { PanelPage } from "../components/pages/PanelPage/PanelPage";
import { AboutPage } from "components/pages/AboutPage/AboutPage";
import { CategoryPage } from "components/pages/CategoryPage/CategoryPage";
import { FullArticlePage } from "components/pages/FullArticlePage/FullArticlePage";
import { HomePage } from "components/pages/HomePage/HomePage";
import { RulesPage } from "components/pages/RulesPage/RulesPage";

export const PageContainer = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article/:id" element={<FullArticlePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/panel" element={<PanelPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1800px;
  margin: auto;
`;
