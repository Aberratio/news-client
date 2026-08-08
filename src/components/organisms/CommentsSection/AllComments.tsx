"use client";

import { styled } from "styled-components";
import { CommentItem } from "types/CommentItem";

import Typography from "components/atoms/Typography";

import Comment from "../../molecules/Comment";

import { AllCommentsWrapper } from "./AllCommentsWrapper";

interface AllCommentsProps {
  comments: CommentItem[];
  reactionsEnabled: boolean;
}

export const AllComments = ({ comments, reactionsEnabled }: AllCommentsProps) => {
  if (comments.length === 0) return null;

  return (
    <AllCommentsWrapper key={comments.length} data-testid="comments-container">
      <Header>
        <Typography variant="h3">Wszystkie komentarze</Typography>
        <Typography variant="small" color="#6b6b6b">
          {comments.length}
        </Typography>
      </Header>
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
              showReactions={reactionsEnabled}
              text={comment.text}
            />
          )
        );
      })}
    </AllCommentsWrapper>
  );
};

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 32px;
  min-width: 0;

  @media screen and (max-width: 567px) {
    margin-top: 24px;
  }
`;
