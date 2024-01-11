import styled from "styled-components";
import {
  NewsBarPublication,
  NewsBarPublicationSize,
} from "./NewsBarPublication";

export interface Publication {
  category: {
    name: string;
    id: number;
  };
  title: string;
  id: number;
}

const publicationMock: Publication = {
  category: {
    name: "Aktualności",
    id: 1,
  },
  title: "Sytuacja na rzece Barycz jest stabilna",
  id: 595,
};

export const NewsBar = () => {
  return (
    <Wrapper data-test-id="news-bar">
      <Container>
        <Row>
          <NewsBarPublication
            publication={publicationMock}
            size={NewsBarPublicationSize.LARGE}
          />
          <SmallPublicationsContainer>
            <NewsBarPublication
              publication={publicationMock}
              size={NewsBarPublicationSize.MEDIUM}
            />
            <SmallPublicationsContainerRow>
              <NewsBarPublication
                publication={publicationMock}
                size={NewsBarPublicationSize.SMALL}
              />
              <NewsBarPublication
                publication={publicationMock}
                size={NewsBarPublicationSize.SMALL}
              />
            </SmallPublicationsContainerRow>
          </SmallPublicationsContainer>
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
  margin: auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1080px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 440px;
`;

const SmallPublicationsContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const SmallPublicationsContainerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
