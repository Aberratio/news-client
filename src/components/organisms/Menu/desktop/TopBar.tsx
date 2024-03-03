"use cleint";

import { aboutPagePath } from "core/builders/buildPath";
import styled from "styled-components";

import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import Typography from "components/atoms/Typography";

import { LogoBar } from "./LogoBar";

export const TopBar = () => {
  return (
    <Wrapper>
      <Container>
        <Part>
          <LogoBar />
        </Part>
        <Part>
          <LinkButton to={aboutPagePath}>
            <Typography variant="small" flexbox={{ justifyContent: "center" }}>
              O nas
            </Typography>
          </LinkButton>
        </Part>
      </Container>
    </Wrapper>
  );
};

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
