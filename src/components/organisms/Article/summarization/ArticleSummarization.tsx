import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { ArticleSummarizationItem } from "../../../../types/ArticleSummarizationItem";
import Image from "next/image";

interface ArticleSummarizationProps {
  article: ArticleSummarizationItem;
}

export const ArticleSummarization = ({
  article,
}: ArticleSummarizationProps) => {
  return (
    <Wrapper data-testid={`article-summarization-${article.id}`}>
      <Container>
        <Link href={article.path}>
          <StyledImage
            src={article.photo.path}
            fill
            alt={article.photo.description ?? "zdjęcie artykułu"}
          />
        </Link>
        <div>
          <Link href={article.path}>
            <Typography wrap>{article.title}</Typography>
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
  position: relative;

  height: 180px;
  width: 100%;

  text-decoration: none;
  background-color: transparent;

  touch-action: manipulation;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #17b978;
  }
`;

const StyledImage = styled(Image)`
  vertical-align: middle;
  border-style: none;

  object-fit: cover;
  object-position: 50% 50%;
`;
