"use client";

import styled from "styled-components";
import { Typography } from "components/atoms/Typography/Typography";

interface SectionProps {
  header: string;
  links: {
    href: string;
    link: string;
    name: string;
  }[];
}

export const Section = ({ header, links }: SectionProps) => {
  return (
    <SectionContainer>
      <Header variant="h3">{header}</Header>
      <LinkBox>
        {links.map((link) => {
          return (
            <StyledTypography>
              <strong>{link.name}</strong>
              <Link href={`${link.href}`}>{link.link}</Link>
            </StyledTypography>
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

const Header = styled(Typography)`
  color: #17b978;
`;

const Link = styled.a`
  margin-left: 4px;
  color: #0056b3;
  cursor: pointer;
`;

const StyledTypography = styled(Typography)`
  // color: #17b978;
`;
