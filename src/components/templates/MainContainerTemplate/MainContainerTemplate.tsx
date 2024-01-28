import { SideBar } from "components/organisms/SideBar/SideBar";
import styled from "styled-components";

interface MainContainerTemplateProps {
  children: React.ReactNode;
}

export const MainContainerTemplate = ({
  children,
}: MainContainerTemplateProps) => {
  return (
    <Wrapper data-test-id="main-container">
      <Container>
        <Row>
          <SideBar />
          {children}
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  padding-top: 42px;

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
