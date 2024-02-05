"use client";

import styled from "styled-components";
import { useActiveViewportSize } from "layout/responsivenes/useActiveViewportSize";

interface SideBarWrapperProps {
  children: React.ReactNode;
}

export const SideBarWrapper = ({ children }: SideBarWrapperProps) => {
  const { tabletL } = useActiveViewportSize();

  if (!tabletL) return null;

  return (
    <Wrapper data-testid="information-bar">
      <Container>{children}</Container>
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
