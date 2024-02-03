"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";

interface WidgetProps {
  dataTestId: string;
  title: string;
  children: React.ReactNode;
}

const Widget = ({ dataTestId, title, children }: WidgetProps) => {
  return (
    <Container data-testid={dataTestId}>
      <Header>
        <Typography color="white">{title}</Typography>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default Widget;

const Container = styled.div`
  border-radius: 8px;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;

  border-radius: 8px 8px 0 0;
  background-color: rgb(46, 104, 150);
`;

const Body = styled.div`
  margin: 0;
  padding: 12px;
`;
