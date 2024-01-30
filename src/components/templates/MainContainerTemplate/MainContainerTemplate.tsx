"use client";

import { BoxHeader } from "components/molecules/BoxHeader/BoxHeader";
import { SideBar } from "components/organisms/SideBar/SideBar";
import MediaQuery from "react-responsive";
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
          <MediaQuery minWidth={768}>
            <SideBar />
          </MediaQuery>
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
  display: flex;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 16px;
    padding: 0 12px;
  }

  @media screen and (min-width: 1074px) {
    padding: 0;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;
