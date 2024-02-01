"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { useStyles } from "core/styles/customization/useStyles";

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
              <Link href={`${link.href}`}>{link.link}</Link>
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
  width: 100%;
  gap: 16px;
  margin-bottom: 32px;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 16px;
  width: 100%;
`;

const Link = styled.a`
  margin-left: 4px;
  color: #0056b3;
  cursor: pointer;
`;
