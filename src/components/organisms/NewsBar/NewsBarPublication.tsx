import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";
import Image from "next/image";
import { Button } from "components/atoms/Button/Button";

interface NewsBarPublicationProps {
  article: ArticleSummarizationItem;
}

export const NewsBarPublication = ({ article }: NewsBarPublicationProps) => {
  return (
    <Wrapper data-testid="new-bar-publication">
      <Container>
        <Part>
          <ImageLink href={`article/${article.id}`}></ImageLink>
          <ImageBackground
            src={article.photo.path}
            fill
            objectFit="cover"
            alt={article.photo.description}
          ></ImageBackground>
        </Part>
        <Part>
          <Description>
            <Title>
              <Typography color="white" variant="h2">
                {article.title}
              </Typography>
            </Title>
            <Typography color="white" marginBottom={30}>
              Premier Donald Tusk ogłosił, że tegoroczne wybory samorządowe
              odbędą się w niedzielę 7 kwietnia. Ewentualna druga tura wyborów
              na włodarzy odbędzie się dwa tygodnie później, 21 kwietnia.
              Publicznie chęć startu w wyborach na burmistrza gminy Milicz
              potwierdziło na razie dwóch kandydatów – obecny burmistrz Piotr...
            </Typography>
            <Button>Więcej</Button>
          </Description>
        </Part>
      </Container>
    </Wrapper>
  );
};

const Part = styled.div`
  height: 500px;
`;

const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 600px 1fr;
`;

const ImageBackground = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 540px;
  max-width: 600px;
  border-radius: 12px;
`;

const ImageLink = styled.a`
  z-index: 2;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.5);
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0)
  );
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  background: linear-gradient(bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 12px;
  height: 100%;
`;

const Title = styled.div`
  margin: 12px 0;
  z-index: 300;
  cursor: pointer;
  color: white !important;

  p {
    text-align: left !important;
  }

  &:hover p {
    color: #17b978 !important;
  }
`;
