"use client";

import styled from "styled-components";

interface MainContainerTemplateProps {
  children: React.ReactNode;
}

export const MainContainerTemplate = ({
  children,
}: MainContainerTemplateProps) => {
  return (
    <Wrapper data-testid="main-container">
      <Container>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding: 12px;

  @media screen and (min-width: 1366px) {
    padding: 0px;
    padding-top: 24px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;
