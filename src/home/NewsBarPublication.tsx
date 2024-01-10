import styled from "styled-components";
import { Publication } from "./NewsBar";
import { Typography } from "layout/components/typography/Typography";

export enum NewsBarPublicationSize {
  SMALL,
  MEDIUM,
  LARGE,
}

interface NewsBarPublicationProps {
  publication: Publication;
  size: NewsBarPublicationSize;
}

export const NewsBarPublication = ({
  publication,
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
    <PublicationContainer>
      <ImageBackground>
        <ImageLink
          href={`publications/publication.php?ID_publication=${publication.id}`}
        >
          <Description>
            <Category
              href={`/publications/category.php?ID_category=${publication.category.id}&ID_page=1`}
            >
              <Typography color="white" variant="small">
                {publication.category.name}
              </Typography>
            </Category>
            <Title>
              <TitleLink
                href={`publications/publication.php?ID_publication=${publication.id}`}
              >
                <Typography color="white" variant={titleType()}>
                  {publication.title}
                </Typography>
              </TitleLink>
            </Title>
          </Description>
        </ImageLink>
      </ImageBackground>
    </PublicationContainer>
  );
};

const PublicationContainer = styled.div`
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

const Category = styled.a`
  display: block;
  padding: 3px 5px;
  z-index: 3;

  border: 1px solid #fff;
  background-color: transparent;

  text-decoration: none;
  touch-action: manipulation;
  transition: all 0.3s;

  &:hover {
    border-color: #15a752;
    background-color: #15a752;
  }
`;

const Title = styled.div`
  margin: 12px 0;
  z-index: 3;
`;

const TitleLink = styled.a`
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
