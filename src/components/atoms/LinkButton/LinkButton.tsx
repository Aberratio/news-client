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
    // <Link href={to}>{children}</Link>
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
  padding: 0.375rem 0.5rem;
  border-radius: 0.25rem;
  min-width: 7rem;

  color: ${theme.buttons.link.color};
  background-color: none;
  background: none;
  border: none;
  cursor: pointer;

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
