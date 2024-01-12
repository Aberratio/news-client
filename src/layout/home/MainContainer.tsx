import { InformationBar } from "layout/information-bar/InformationBar";
import styled from "styled-components";
import { Wall } from "./Wall";

export const MainContainer = () => {
  return (
    <Wrapper data-test-id="main-container">
      <Container>
        <Row>
          <InformationBar />
          <Wall />
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding-top: 70px;

  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;
