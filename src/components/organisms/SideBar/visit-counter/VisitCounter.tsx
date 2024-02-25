"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { useVisitCounter } from "./useVisitCounter";
import { useEffect, useState } from "react";
import WidgetFull from "components/molecules/Widget/WidgetFull";
import { usePathname } from "next/navigation";

export const VisitCounter = () => {
  const { isLoading, visits, loadVisits } = useVisitCounter();
  const [digits, setDigits] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const pathName = usePathname();

  useEffect(() => {
    loadVisits(pathName);
  }, []);

  useEffect(() => {
    setDigits(visits.toString().split("").map(Number));
  }, [visits]);

  if (isLoading) {
    return <></>;
  }

  return (
    <WidgetFull dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography color="white">Licznik odwiedzin strony</Typography>
        <VisitCounterContent>
          {digits.map((digit, index) => (
            <NumberCard key={index}>
              <Typography>{digit}</Typography>
            </NumberCard>
          ))}
        </VisitCounterContent>
      </Container>
    </WidgetFull>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const NumberCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;

const VisitCounterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 8px;
  border-radius: 8px;
  margin: auto;
`;
