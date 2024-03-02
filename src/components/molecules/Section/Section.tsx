"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { useStyles } from "core/styles/customization/useStyles";
import Link from "next/link";

interface SectionProps {
  header: string;
  links: {
    href: string;
    link: string;
    name: string;
  }[];
}

export const Section = ({ header, links }: SectionProps) => {
  const { customTheme } = useStyles();

  return (
    <SectionContainer>
      <Typography color={customTheme.general.primaryColor} variant="h3">
        {header}
      </Typography>
      <LinkBox>
        {links.map((link) => {
          return (
            <Typography key={link.name}>
              <strong>{link.name}</strong>
              <StyledLink href={`${link.href}`}>
                <Typography color="#0056b3">{link.link}</Typography>
              </StyledLink>
            </Typography>
          );
        })}
      </LinkBox>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 32px;
  width: 100%;
  gap: 16px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  width: 100%;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  margin-left: 4px;
  cursor: pointer;
`;
