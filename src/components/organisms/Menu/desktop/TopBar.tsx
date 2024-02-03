"use cleint";

import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import Typography from "components/atoms/Typography";
import { aboutPagePath } from "core/builders/buildPath";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const TopBar = () => {
  return (
    <Wrapper>
      <Container>
        <Part>
          <LogoMobile>
            <Link href="/">
              <Logo src="/icons/logo_footer.png" alt="logo" fill />
            </Link>
          </LogoMobile>
        </Part>
        <Part>
          <LinkButton to={aboutPagePath}>
            <Typography variant="small" justifyContent="center">
              O nas
            </Typography>
          </LinkButton>
        </Part>
      </Container>
    </Wrapper>
  );
};

const LogoMobile = styled.div`
  display: block;
  position: relative;
  height: 100%;
  flex-grow: 1;
  max-width: 270px;
`;

const Wrapper = styled.div`
  background-color: #222;
  height: 65px;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  height: 100% !important;
  max-width: 1380px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Part = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 65px;
`;

const Logo = styled(Image)`
  vertical-align: middle;
  border-style: none;
  max-width: 100%;
  max-height: 150%;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 400px;
  margin: auto;
`;
