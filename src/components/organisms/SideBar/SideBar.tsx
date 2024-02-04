"use client";

import styled from "styled-components";
import { FirstSite } from "./FirstSite";
import { VisitCounter } from "./visit-counter/VisitCounter";
import { useActiveViewportSize } from "layout/responsivenes/useActiveViewportSize";
import { LastComments } from "./last-comments/LastComments";

export const SideBar = () => {
  const { tabletL } = useActiveViewportSize();

  if (!tabletL) return null;

  return (
    <Wrapper data-testid="information-bar">
      <Container>
        <FirstSite />
        <LastComments />
        <VisitCounter />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 4px;
`;
