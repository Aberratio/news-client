"use client";

import { styled } from "styled-components";

interface SideBarSmallImageContainerProps {
  dataTestId?: string;
  isWrappedByLink?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const SideBarSmallImageContainer = ({
  dataTestId,
  isWrappedByLink,
  onClick,
  children,
}: SideBarSmallImageContainerProps) => {
  return (
    <Wrapper
      data-testid={dataTestId}
      $isClickable={!!onClick || isWrappedByLink}
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
