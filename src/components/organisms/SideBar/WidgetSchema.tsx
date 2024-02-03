import Typography from "components/atoms/Typography";
import React from "react";
import styled from "styled-components";

interface WidgetSchemaProps {
  dataTestId: string;
  title: string;
  children: React.ReactNode;
}

export const WidgetSchema = ({
  dataTestId,
  title,
  children,
}: WidgetSchemaProps) => {
  return (
    <Container data-testid={dataTestId}>
      <Header>
        <Typography>{title}</Typography>
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 8px;

  background-color: white;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: blue;
  color: white;
  border-radius: 8px 8px 0 0;
  padding: 16px;
  background-color: rgb(46, 104, 150);
`;

const Body = styled.div`
  margin: 0;
  padding: 12px;
`;
