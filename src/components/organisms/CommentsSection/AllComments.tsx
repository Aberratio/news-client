"use client";

import Typography from "components/atoms/Typography";
import { Comment } from "../../molecules/Comment/Comment";
import { styled } from "styled-components";
import { CommentItem } from "types/CommentItem";

interface AllCommentsProps {
  comments: CommentItem[];
}

export const AllComments = ({ comments }: AllCommentsProps) => {
  return (
    <Container>
      <Typography variant="h3" marginTop={32}>
        Wszystkie komentarze
      </Typography>
      {comments.map((comment: any, index: number) => (
        <Comment
          author={comment.author}
          date={comment.date}
          dislikes={comment.dislikes}
          key={index}
          likes={comment.likes}
          text={comment.text}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
`;
