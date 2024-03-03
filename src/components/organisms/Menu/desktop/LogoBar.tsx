"use cleint";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const LogoBar = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink href="/">
          <StyledImage
            src="/icons/logo_footer.png"
            alt="logo"
            width={300}
            height={35}
          />
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 300px;
  height: 65px;

  margin: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;
  width: 90%;
`;
