import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface WidgetSchemaProps {
  dataTestId: string;
  title: string;
  children: any;
}

export const WidgetSchema = ({
  dataTestId,
  title,
  children,
}: WidgetSchemaProps) => {
  return (
    <Container data-test-id={dataTestId}>
      <Header>
        <Title>{title}</Title>
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

const Title = styled(Typography)`
  margin: 0;
  padding-right: 25px;
`;

const Body = styled.div`
  padding-top: 35px;
  margin: 0;
`;
