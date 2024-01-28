"use client";

import styled from "styled-components";
import { WidgetSchema } from "../WidgetSchema";
import { Typography } from "components/atoms/Typography/Typography";
import { useVisitCounter } from "./useVisitCounter";
import { useEffect } from "react";

export const VisitCounter = () => {
  const { isLoading, visits, loadVisits } = useVisitCounter();

  useEffect(() => {
    loadVisits();
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <WidgetSchema dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography>{visits}</Typography>
      </Container>
    </WidgetSchema>
  );
};

const Container = styled.div`
  transition: all 0.3s;
  width: calc(100% - 48px);
`;
