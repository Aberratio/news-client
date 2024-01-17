import { Arrow } from "layout/components/icons/Arrow";
import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const Breadcrumb = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Home href="#">
            <Typography variant="small">Strona Główna</Typography>
          </Home>
          <Arrow direction="right" />
          <MiddlePath href="#">
            <Typography variant="small">Wiadomości</Typography>
          </MiddlePath>
          <Arrow direction="right" />
          <MiddlePath href="#">
            <Typography variant="small">Aktualności</Typography>
          </MiddlePath>
          <Arrow direction="right" />
          <Current>
            <Typography variant="small">Sytuacja</Typography>
          </Current>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  padding: 0;
  width: 100%;
  max-width: 1080px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 8px 0px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  padding-right: 30px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const Home = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  float: left;
  display: flex;
`;

const Current = styled.span`
  float: left;
  display: flex;
  color: rgb(184, 0, 0);
`;

const MiddlePath = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  float: left;
  display: flex;
`;
