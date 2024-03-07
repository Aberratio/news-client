"use client";

import Link from "next/link";
import styled from "styled-components";

import Typography from "components/atoms/Typography";

export const WebcoBar = () => {
  return (
    <Wrapper data-testid="webco-bar">
      <Container>
        <Typography>Copyright © 2021-2024</Typography>
        <StyledLink href="https//:webcodesign.pl" target="_blank">
          <Typography> webco.design </Typography>
        </StyledLink>
        <Typography>☕ All rights reserved.</Typography>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #151515;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;

  margin: auto;
  padding: 16px;

  width: 100%;
  max-width: 1080px;
  min-height: 80px;
  color: white;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
  color: #15a752;
  cursor: pointer;
`;
