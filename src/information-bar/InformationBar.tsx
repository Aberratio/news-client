import styled from "styled-components";
import { FirstSite } from "./FirstSite";
import { VisitCounter } from "./VisitCounter";
import { LastComments } from "./LastComments";

export const InformationBar = () => {
  return (
    <Wrapper data-test-id="information-bar">
      <Container>
        <FirstSite />
        <VisitCounter />
        <LastComments />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding-bottom: 20px;
`;
