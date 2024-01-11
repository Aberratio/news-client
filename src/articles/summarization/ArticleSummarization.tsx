import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticBar } from "./StatisticBar";
import { ArticleSummarizationItem } from "./ArticleSummarizationItem";

interface ArticleSummarizationProps {
  article: ArticleSummarizationItem;
}

export const ArticleSummarization = ({
  article,
}: ArticleSummarizationProps) => {
  return (
    <Container>
      <ItemContainer>
        <ImageWrapper href="/publications/publication.php?ID_publication=594">
          <Image src="/images/article/barycz.jpg" />
        </ImageWrapper>
        <ItemBody>
          <TitleWrapper>
            <Typography>{article.title}</Typography>
          </TitleWrapper>
          <MetadataWrapper>
            <AuthorWrapper href="#">
              <Typography>{article.author.name}</Typography>
            </AuthorWrapper>
            <Typography>- {article.createdOn.toString()}</Typography>
          </MetadataWrapper>
          <StatisticBar />
        </ItemBody>
      </ItemContainer>
    </Container>
  );
};

const AuthorWrapper = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
`;

const MetadataWrapper = styled.div`
  padding-bottom: 8px;
`;

const TitleWrapper = styled.a`
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
`;

const ItemBody = styled.div`
  padding-top: 16px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 25px;
`;

const ItemContainer = styled.div`
  margin-bottom: 45px;
`;

const ImageWrapper = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  display: block;
`;

const Image = styled.img`
  vertical-align: middle;
  border-style: none;
  object-fit: cover;
  object-position: 50% 50%;
  height: 180px;
  width: 100%;
`;
