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
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Body = styled.div`
  padding: 16px;
  background-color: #222;
`;
