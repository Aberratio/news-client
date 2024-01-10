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
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`;

const Container = styled.div`
  padding-bottom: 20px;
  padding-left: 10px;
`;
