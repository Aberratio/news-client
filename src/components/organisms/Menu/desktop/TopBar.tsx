"use cleint";

import { LinkButton } from "components/atoms/LinkButton/LinkButton";
import Typography from "components/atoms/Typography";
import { aboutPagePath } from "core/builders/buildPath";
import styled from "styled-components";

export const TopBar = () => {
  return (
    <Wrapper>
      <Container>
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

const Wrapper = styled.div`
  background-color: #222;
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
`;
