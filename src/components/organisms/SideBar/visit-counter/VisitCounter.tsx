"use client";

import { fetchVisits } from "core/api/fetchVisits";

import Box from "components/atoms/Box";
import Typography from "components/atoms/Typography";
import Widget from "components/molecules/Widget";

interface VisitCounterProps {
  isNew?: boolean;
}

export const VisitCounter = async ({ isNew = false }: VisitCounterProps) => {
  const visits = await fetchVisits(isNew);

  return (
    <Widget dataTestId="visit-counter" title="Licznik odwiedzin">
      <Box margin="12px auto">
        <Typography>{`${visits} odwiedzin`}</Typography>
      </Box>
    </Widget>
  );
};
