import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import styled from "styled-components";
import { FullArticlePage } from "./FullArticlePage";
import { ContactPage } from "./ContactPage";
import { CategoryPage } from "./CategoryPage";

export const PageContainer = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/article/:id" element={<FullArticlePage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1800px;
  margin: auto;
`;
