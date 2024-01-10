import { InformationBar } from "information-bar/InformationBar";
import styled from "styled-components";

export const MainContainer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <InformationBar />
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
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center !important;
`;
