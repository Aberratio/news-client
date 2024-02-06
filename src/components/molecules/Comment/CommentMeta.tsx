"use client";

import Typography from "components/atoms/Typography";
import { styled } from "styled-components";

interface CommentMetaProps {
  author: string;
  date: string;
}

export const CommentMeta = ({ author, date }: CommentMetaProps) => {
  return (
    <Container>
      <Typography>
        <strong>{author}</strong>
      </Typography>
      <Typography variant="small">{date}</Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
