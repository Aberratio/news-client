"use client";

import Typography from "components/atoms/Typography";
import Link from "next/link";
import styled from "styled-components";

export const WebcoBar = () => {
  return (
    <Wrapper>
      <Container>
        <Typography>Copyright © 2021-2024</Typography>
        <StyledLink href="https:webcodesign.pl" target="_blank">
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
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 16px;

  width: 100%;
  max-width: 1080px;
  min-height: 80px;
  color: white;
`;

const StyledLink = styled(Link)`
  margin: 0 8px;
  color: #15a752;
  cursor: pointer;
`;
