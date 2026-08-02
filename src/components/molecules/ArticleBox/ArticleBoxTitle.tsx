"use client";

import Link from "next/link";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

interface ArticleBoxTitleProps {
  title: string;
  path: string;
}

export const ArticleBoxTitle = ({ title, path }: ArticleBoxTitleProps) => {
  return (
    <StyledLink href={path}>
      <Typography
        variant="article"
        wrap
        space={{ marginBottom: 2 }}
        dataTestId="article-box-title"
      >
        {title}
      </Typography>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: transparent;
  margin-top: 2px;

  touch-action: manipulation;
  transition: color 180ms ease;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.customTheme.general.secondaryColor};
  }

  p {
    line-height: 1.28;
    overflow-wrap: anywhere;
  }
`;
