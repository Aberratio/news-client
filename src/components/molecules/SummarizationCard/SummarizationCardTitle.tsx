"use client";

import Link from "next/link";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

interface SummarizationCardTitleProps {
  title: string;
  path: string;
}

export const SummarizationCardTitle = ({
  title,
  path,
}: SummarizationCardTitleProps) => {
  return (
    <StyledLink href={path}>
      <Typography variant="article" wrap space={{ marginBottom: 2 }}>
        {title}
      </Typography>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  margin-top: 4px;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #17b978;
  }

  p {
    line-height: 1.25;
  }
`;
