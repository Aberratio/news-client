import styled from "styled-components";
import { Typography } from "components/atoms/Typography/Typography";
import { ArticleSummarizationItem } from "types/ArticleSummarizationItem";
import Image from "next/image";

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
      <ImageLink href={`article/${article.id}`}>
        <Description $size={size}>
          <Title>
            <Typography color="white" variant={titleType()}>
              {article.title}
            </Typography>
          </Title>
        </Description>
      </ImageLink>
      <ImageBackground
        src={article.photo.path}
        fill
        objectFit="cover"
        alt={article.photo.description}
      ></ImageBackground>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

const ImageBackground = styled(Image)`
  position: relative;
  width: 100%;
  height: 440px;
`;

const ImageLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
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

const Description = styled.div<{ $size: NewsBarPublicationSize }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 0
    ${({ $size }) => ($size === NewsBarPublicationSize.SMALL ? "8px" : "24px")};
  width: 100%;
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
