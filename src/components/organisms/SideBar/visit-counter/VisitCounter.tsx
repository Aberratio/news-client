"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { useVisitCounter } from "./useVisitCounter";
import { useEffect } from "react";
import Widget from "components/molecules/Widget";

export const VisitCounter = () => {
  const { isLoading, visits, loadVisits } = useVisitCounter();

  useEffect(() => {
    loadVisits();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Widget dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography>{visits}</Typography>
      </Container>
    </Widget>
  );
};

const Container = styled.div`
  transition: all 0.3s;
  width: calc(100% - 48px);
`;
