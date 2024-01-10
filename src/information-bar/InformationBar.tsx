import styled from "styled-components";
import { FirstSite } from "./FirstSite";
import { VisitCounter } from "./VisitCounter";

export const InformationBar = () => {
  return (
    <Wrapper data-test-id="information-bar">
      <Container>
        <FirstSite />
        <VisitCounter />
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
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  --font-label-size: 16px;
  --placeholder-color: rgba(0, 0, 0, 0.309);
  font-weight: 400;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: #666;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 20px;
  padding-left: 10px;
`;
