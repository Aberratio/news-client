import styled from "styled-components";

export const NewsBar = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <BigPublicationContainer>
            <BigPublicationContainerImageBackground></BigPublicationContainerImageBackground>
          </BigPublicationContainer>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  background-color: #fff;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1px;
  margin-right: -1px;
`;

const BigPublicationContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  flex: 0 0 50%;
  max-width: 50%;
  padding-bottom: 2px;
  padding-left: 1px;
  padding-right: 1px;
`;

const BigPublicationContainerImageBackground = styled.div`
  width: 100%;
  height: 440px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url("/images/article/kościól.jpg");
`;
