import styled from "styled-components";
import { FirstSite } from "./FirstSite";
import { VisitCounter } from "./visit-counter/VisitCounter";
import { LastComments } from "./last-comments/LastComments";

export const SideBar = () => {
  return (
    <Wrapper data-testid="information-bar">
      <Container>
        <FirstSite />
        <VisitCounter />
        {/* <LastComments /> */}
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
