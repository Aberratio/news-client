"use client";

import { styled } from "styled-components";

interface SideBarSmallImageContainerProps {
  dataTestId?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SideBarSmallImageContainer = ({
  dataTestId,
  onClick,
  children,
}: SideBarSmallImageContainerProps) => {
  return (
    <Wrapper
      data-testid={dataTestId}
      $isClickable={!!onClick}
      onClick={onClick}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div<{ $isClickable?: boolean }>`
  position: relative;
  height: 370px;
  ${({ $isClickable }) =>
    $isClickable &&
    `
    cursor: pointer;
  `}
`;
