"use client";

import { useActiveViewportSize } from "layout/responsivenes/useActiveViewportSize";
import styled from "styled-components";

interface SideBarWrapperProps {
  children: React.ReactNode;
}

export const SideBarWrapper = ({ children }: SideBarWrapperProps) => {
  const { tabletL } = useActiveViewportSize();

  if (!tabletL) return null;

  return (
    <Wrapper data-testid="side-bar">
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 4px;
`;
