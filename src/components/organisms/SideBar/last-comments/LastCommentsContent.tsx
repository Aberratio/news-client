"use server";

import { CommentSummarizationItem } from "types/CommentSummarizationItem";

import Typography from "components/atoms/Typography";

import { CommentSummarization } from "./CommentSummarization";

interface LastCommentsContentProps {
  comments: CommentSummarizationItem[];
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
