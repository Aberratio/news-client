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

const Wrapper = styled.section`
  display: block;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;
