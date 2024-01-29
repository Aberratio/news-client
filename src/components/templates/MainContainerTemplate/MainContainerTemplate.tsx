"use client";

import { BoxHeader } from "components/molecules/BoxHeader/BoxHeader";
import { SideBar } from "components/organisms/SideBar/SideBar";
import styled from "styled-components";

interface MainContainerTemplateProps {
  name?: string;
  children: React.ReactNode;
}

export const MainContainerTemplate = ({
  name,
  children,
}: MainContainerTemplateProps) => {
  return (
    <Wrapper data-testid="main-container">
      <Container>
        <Row>
          <SideBar />
          <RightContainer>
            {name && <BoxHeader name={name} />}
            {children}
          </RightContainer>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding-top: 24px;

  background-color: #fff;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 16px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
