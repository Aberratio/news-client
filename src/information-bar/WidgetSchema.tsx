import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

interface WidgetSchemaProps {
  title: string;
  children: any;
}

export const WidgetSchema = ({ title, children }: WidgetSchemaProps) => {
  return (
    <Container data-test-id="first-site">
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
  border: 1px solid #e6e6e6;
  padding: 0 18px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: calc(100% + 2px);
    top: -1px;
    left: -1px;
  }
`;

const Title = styled(Typography)`
  margin: 0;
  padding-right: 25px;
`;

const Body = styled.div`
  padding-top: 35px;
  margin: 0;
`;
