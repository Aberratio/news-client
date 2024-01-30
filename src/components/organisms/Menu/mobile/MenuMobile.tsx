"use cleint";

import { Hamburger } from "components/molecules/Icons/Hamburger";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const MenuMobile = () => {
  return (
    <Wrapper data-testid="menu-mobile">
      <LogoMobile>
        <Link href="/">
          <Logo
            src="/icons/logo_footer.png"
            alt="logo"
            width={300}
            height={30}
          />
        </Link>
      </LogoMobile>
      <HamburgerWrapper>
        <Hamburger size={{ width: "2rem", height: "2rem" }} />
      </HamburgerWrapper>
    </Wrapper>
  );
};

const HamburgerWrapper = styled.div`
  cursor: pointer;
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
