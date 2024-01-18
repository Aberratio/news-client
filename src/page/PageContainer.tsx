import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import styled from "styled-components";
import { FullArticlePage } from "./FullArticlePage";
import { CategoryPage } from "./CategoryPage";
import { PanelPage } from "./PanelPage";

export const PageContainer = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article/:id" element={<FullArticlePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/panel" element={<PanelPage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1800px;
  margin: auto;
`;
