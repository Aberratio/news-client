"use client";

import Image from "next/image";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import styled from "styled-components";

import { PortableText } from "components/molecules/PortableText/PortableText";

export const DescriptionColumn = () => {
  const { generalConfig } = useOrganizationInfo();

  if (!generalConfig) return null;

  return (
    <Container>
      <LogoWrapper href="/">
        <Logo
          src={generalConfig.footerLogo.path}
          alt={generalConfig.footerLogo.alt}
          width={300}
          height={30}
        />
      </LogoWrapper>
      <Description>
        <PortableText
          value={generalConfig.footerDescription}
          variant="info-white"
        />
      </Description>
    </Container>
  );
};

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
`;

const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;

const LogoWrapper = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 95px;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  width: 95%;
  height: auto;
`;
