"use client";

import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { buildArticlePath } from "core/builders/buildPath";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import Comment from "components/molecules/Comment";

interface CommentSummarizationProps {
  comment: CommentSummarizationItem;
  iterator: number;
}

export const CommentSummarization = ({
  comment,
  iterator,
}: CommentSummarizationProps) => {
  return (
    <Container data-testid={`comment-summarization-${iterator}`}>
      <Link href={buildArticlePath(comment.articleId)}>
        <Typography>{comment.articleTitle}</Typography>
      </Link>
      <Comment
        author={comment.author}
        commentId={comment.id}
        date={comment.date}
        isReadOnly
        text={comment.text}
        likes={comment.likes}
        dislikes={comment.dislikes}
      />
    </Container>
  );
};

const Container = styled.li`
  margin: 0;
  list-style-type: none;
  padding-top: 8px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;

  p {
    display: inline !important;
    line-height: 1.25;
  }
`;

const Link = styled.a`
  ${({ theme }) => `
    background-color: transparent;
    touch-action: manipulation;
    transition: all 0.3s;
    width: calc(100% - 48px);
    color: ${theme.general.primaryColor};
    text-align: left;

    cursor: pointer;
    margin-bottom: 8px;

    p {
      line-height: 1.15;
    }
    `}
`;
