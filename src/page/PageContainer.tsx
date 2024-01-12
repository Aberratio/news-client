import { Routes, Route } from "react-router-dom";
import { HomePage } from "../layout/home/HomePage";
import { AboutPage } from "./AboutPage";
import styled from "styled-components";
import { FullArticlePage } from "./FullArticlePage";

export const PageContainer = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article" element={<FullArticlePage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1800px;
  margin: auto;
`;
