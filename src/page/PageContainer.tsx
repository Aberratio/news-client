import { Routes, Route } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { AboutPage } from "./AboutPage";
import styled from "styled-components";

export const PageContainer = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.main`
  max-width: 1800px;
  margin: auto;
`;
