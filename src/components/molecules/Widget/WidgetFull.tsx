"use client";

import styled from "styled-components";

interface WidgetProps {
  dataTestId: string;
  title: string;
  children: React.ReactNode;
}

const WidgetFull = ({ dataTestId, children }: WidgetProps) => {
  return (
    <Container data-testid={dataTestId}>
      <Body>{children}</Body>
    </Container>
  );
};

export default WidgetFull;

const Container = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const Body = styled.div`
  margin: 0;
  background-color: rgb(46, 104, 150);
`;
