"use client";

import { styled } from "styled-components";

import Typography from "components/atoms/Typography";

interface CommentMetaProps {
  author: string;
  date: string;
}

export const CommentMeta = ({ author, date }: CommentMetaProps) => {
  return (
    <Container>
      <Typography variant="small">
        <strong>{author}</strong>
      </Typography>
      <Typography variant="small" color="#6b6b6b">
        {date}
      </Typography>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;
