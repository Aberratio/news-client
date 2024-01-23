import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { ArticleSummarizationItem } from "../items/ArticleSummarizationItem";

interface ArticleSummarizationProps {
  article: ArticleSummarizationItem;
}

export const ArticleSummarization = ({
  article,
}: ArticleSummarizationProps) => {
  return (
    <Wrapper data-test-id={`article-summarization-${article.id}`}>
      <Container>
        <Link href={article.path}>
          <Image src={`/${article.photo.path}`} />
        </Link>
        <div>
          <Link href={article.path}>
            <Title>{article.title}</Title>
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Link = styled.a`
  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
`;

const Title = styled(Typography)`
  text-align: left;
`;

const Image = styled.img`
  height: 180px;
  width: 100%;

  vertical-align: middle;
  border-style: none;

  object-fit: cover;
  object-position: 50% 50%;
`;
