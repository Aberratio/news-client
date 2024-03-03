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
  margin: 92px 0;
`;
