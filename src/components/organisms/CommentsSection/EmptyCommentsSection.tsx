"use client";

import { styled } from "styled-components";

import Typography from "components/atoms/Typography";

export const EmptyCommentsSection = () => {
  return (
    <Container>
      <Typography>
        Brak komentarzy. Napisz pierwszy komentarz do tego artykułu!
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  margin: 32px 0 64px;
  padding: 18px;
  border: 1px dashed #d7dce0;
  border-radius: 8px;
  background: #fafafa;

  @media screen and (max-width: 567px) {
    margin-bottom: 48px;
    padding: 14px;
  }
`;
