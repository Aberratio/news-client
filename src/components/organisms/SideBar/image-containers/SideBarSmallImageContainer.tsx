"use client";

import { styled } from "styled-components";

interface SideBarSmallImageContainerProps {
  dataTestId?: string;
  children: React.ReactNode;
}

export const SideBarSmallImageContainer = ({
  dataTestId,
  children,
}: SideBarSmallImageContainerProps) => {
  return <Wrapper data-testid={dataTestId}>{children}</Wrapper>;
};
const Wrapper = styled.div`
  position: relative;
  height: 370px;
`;
