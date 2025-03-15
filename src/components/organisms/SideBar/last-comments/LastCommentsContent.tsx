"use client";

import { CommentSummaryItem } from "types/CommentSummaryItem";

import Typography from "components/atoms/Typography";

import { CommentSummarization } from "./CommentSummarization";

interface LastCommentsContentProps {
  comments: CommentSummaryItem[];
}

export const LastCommentsContent = ({ comments }: LastCommentsContentProps) => {
  if (comments.length === 0) {
    return <Typography>Brak komentarzy</Typography>;
  }

  return (
    <ul>
      {comments.map((comment, index) => (
        <CommentSummarization comment={comment} key={index} iterator={index} />
      ))}
    </ul>
  );
};
