"use cleint";

import Image from "next/image";
import Link from "next/link";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";
import { styled } from "styled-components";

import { HamburgerButton } from "./HamburgerButton";

interface MenuMobileProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const MenuMobile = ({ isOpen, handleClick }: MenuMobileProps) => {
  const { generalConfig } = useOrganizationInfo();

  if (!generalConfig) return null;

  return (
    <>
      <Wrapper data-testid="menu-mobile">
        <LogoMobile data-testid="logo-mobile">
          <Link href="/">
            <Logo
              src={generalConfig.mobileLogo.path}
              alt={generalConfig.mobileLogo.alt}
              width={300}
              height={40}
            />
          </Link>
        </LogoMobile>
        <HamburgerWrapper>
          <HamburgerButton isOpen={isOpen} handleClick={handleClick} />
        </HamburgerWrapper>
      </Wrapper>
    </>
  );
};

const HamburgerWrapper = styled.nav`
  cursor: pointer;
  z-index: 200000;
  padding-right: 8px;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;

  height: 65px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;

const LogoMobile = styled.div`
  display: block;
  position: relative;
  height: 100%;
  flex-grow: 1;
  max-width: 270px;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  max-height: 150%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`;
