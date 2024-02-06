"use client";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export const LinkButton = ({ to, children }: LinkProps) => {
  return (
    <StyledLink href={to} $isDisabled={false} data-testid="link-button">
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<{ $isDisabled?: boolean }>`
  ${({ theme, $isDisabled }) => `
  display: flex;
  justify-content: center;

  height: 2rem;
  min-width: 7rem;
  padding: 0.375rem 0.5rem;
  
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  color: ${theme.buttons.link.color};
  background-color: none;
  background: none;

  ${
    !$isDisabled &&
    `
    &:hover {
      color: ${theme.buttons.link.onHoverColor};
      background-color: none;
      background: none;
      border: none;
    }

    &:focus {
      color: ${theme.buttons.link.onHoverColor};
      background-color: none;
      background: none;
      border: none;
    }
    `
  }
    `}
`;
