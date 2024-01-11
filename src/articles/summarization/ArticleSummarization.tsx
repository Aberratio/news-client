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
    <Wrapper>
      <Container>
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
      </Container>
    </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
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
