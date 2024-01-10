import styled from "styled-components";
import { WidgetSchema } from "./WidgetSchema";
import { Typography } from "layout/components/typography/Typography";

export const VisitCounter = () => {
  return (
    <WidgetSchema dataTestId="visit-counter" title="Licznik odwiedzin">
      <Container>
        <Typography>99999999</Typography>
      </Container>
    </WidgetSchema>
  );
};

const Container = styled.div`
  transition: all 0.3s;
  width: calc(100% - 48px);
`;
