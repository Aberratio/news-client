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
  padding-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding: 0 18px;
  position: relative;
  background-color: #222;
  color: white;
`;

const Body = styled.div`
  padding-top: 35px;
  margin: 0;
`;
