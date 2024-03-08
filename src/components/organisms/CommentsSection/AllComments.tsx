"use server";

import { CommentItem } from "types/CommentItem";

import Typography from "components/atoms/Typography";

import Comment from "../../molecules/Comment";

import { AllCommentsWrapper } from "./AllCommentsWrapper";

interface AllCommentsProps {
  comments: CommentItem[];
}

export const AllComments = ({ comments }: AllCommentsProps) => {
  if (comments.length === 0) return null;

  return (
    <AllCommentsWrapper key={comments.length}>
      <Typography variant="h3" space={{ marginTop: 32 }}>
        Wszystkie komentarze
      </Typography>
      {comments.map((comment: CommentItem) => {
        return (
          comment && (
            <Comment
              author={comment.author}
              commentId={comment.id}
              date={comment.date}
              dislikes={comment.dislikes}
              key={`${comment.id}-${comment.likes}-${comment.dislikes}`}
              likes={comment.likes}
              text={comment.text}
            />
          )
        );
      })}
    </AllCommentsWrapper>
  );
};
