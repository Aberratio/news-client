"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

interface VisitCounterProps {
  visits: number;
}

export const VisitCounter = ({ visits }: VisitCounterProps) => {
  return (
    <Widget dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography>{`${visits} czytelników!`}</Typography>
      </Container>
    </Widget>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 12px auto;
`;
