 
"use cleint";

import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { HamburgerButton } from "./HamburgerButton";

interface MenuMobileProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const MenuMobile = ({ isOpen, handleClick }: MenuMobileProps) => {
  return (
    <>
      <Wrapper data-testid="menu-mobile">
        <LogoMobile>
          <Link href="/">
            <Logo
              src="/icons/logo_mobile.png"
              alt="logo"
              width={300}
              height={40}
            />
          </Link>
        </LogoMobile>
        <HamburgerWrapper>
          <HamburgerButton isOpen={isOpen} handleClick={handleClick} />
        </HamburgerWrapper>
      </Wrapper>
      {/* <AnimatePresence>
        {isMenuOpen && (
          <NavigationMobile isOpen={isMenuOpen} handleClick={handleClick} />
        )}
      </AnimatePresence> */}
    </>
  );
};

const HamburgerWrapper = styled.nav`
  cursor: pointer;
  z-index: 200000;
`;

const Wrapper = styled.div`
  align-items: center;
  height: 65px;
  background-color: #fff;
  padding: 10px 25px;
  -webkit-box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 0 3px 8px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
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
