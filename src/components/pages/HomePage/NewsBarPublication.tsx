import styled from "styled-components";
import { Typography } from "components/atoms/Typography/Typography";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";

export enum NewsBarPublicationSize {
  SMALL,
  MEDIUM,
  LARGE,
}

interface NewsBarPublicationProps {
  article: ArticleSummarizationItem;
  size: NewsBarPublicationSize;
}

export const NewsBarPublication = ({
  article,
  size,
}: NewsBarPublicationProps) => {
  const titleType = () => {
    switch (size) {
      case NewsBarPublicationSize.LARGE:
        return "h3";
      case NewsBarPublicationSize.MEDIUM:
        return "body";
      default:
        return "small";
    }
  };

  return (
    <Wrapper data-testid="new-bar-publication">
      <ImageBackground>
        <ImageLink href={`article/${article.id}`}>
          <Description>
            <Title>
              <Typography color="white" variant={titleType()}>
                {article.title}
              </Typography>
            </Title>
          </Description>
        </ImageLink>
      </ImageBackground>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ImageBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/article/kościól.jpg");
`;

const ImageLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: pointer;

  opacity: 0.5;
  background: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 0 24px;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  margin: 12px 0;
  z-index: 3;
`;

const TitleLink = styled.a`
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  max-width: 100%;

  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover p {
    color: #15a752 !important;
  }
`;
