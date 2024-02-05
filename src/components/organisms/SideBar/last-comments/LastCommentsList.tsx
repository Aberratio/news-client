"use client";

import styled from "styled-components";
import { CommentSummarization } from "./CommentSummarization";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import Typography from "components/atoms/Typography";

interface LastCommentsListProps {
  comments: CommentSummarizationItem[];
}

export const LastCommentsList = ({ comments }: LastCommentsListProps) => {
  if (comments.length === 0) {
    return <Typography>Brak komentarzy</Typography>;
  }

  return (
    <List>
      {comments.map((comment, index) => (
        <CommentSummarization comment={comment} key={index} iterator={index} />
      ))}
    </List>
  );
};

const List = styled.ul`
  margin: 0;
  list-style-type: none;
`;
