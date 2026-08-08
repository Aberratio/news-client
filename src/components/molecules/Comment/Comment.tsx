"use client";

import { styled } from "styled-components";

import Typography from "components/atoms/Typography";

import { StatisticCommentBar } from "./StatisticCommentBar";

interface CommentProps {
  author: string;
  commentId: string;
  date: string;
  isReadOnly?: boolean;
  showReactions?: boolean;
  text: string;
  likes: number;
  dislikes: number;
}

const Comment = ({
  author,
  commentId,
  date,
  isReadOnly = false,
  showReactions = true,
  text,
  likes,
  dislikes,
}: CommentProps) => {
  return (
    <Container data-testid="comment" $isReadOnly={isReadOnly}>
      <Header>
        <AuthorName variant="small" color="black" dataTestId="metadata-name">
          <strong>{author}</strong>
        </AuthorName>
        <PublishedDate
          variant="small"
          color="#6b6b6b"
          dataTestId="metadata-date"
        >
          {date}
        </PublishedDate>
      </Header>
      <CommentText data-testid="comment-text">{text}</CommentText>
      {!isReadOnly && showReactions && (
        <StatisticCommentBar
          commentId={commentId}
          dislikes={dislikes}
          isReadOnly={isReadOnly}
          likes={likes}
        />
      )}
    </Container>
  );
};

export default Comment;

const Container = styled.article<{ $isReadOnly: boolean }>`
  min-width: 0;

  ${({ $isReadOnly }) =>
    !$isReadOnly &&
    `
      padding: 14px 16px;
      border: 1px solid #e6e8eb;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

      @media screen and (max-width: 567px) {
        padding: 12px;
      }
    `}
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 12px;
  min-width: 0;

  @media screen and (max-width: 420px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const AuthorName = styled(Typography)`
  min-width: 0;
  max-width: 100%;
  margin: 0;
  overflow-wrap: anywhere;
`;

const PublishedDate = styled(Typography)`
  flex-shrink: 0;
  margin: 0;
`;

const CommentText = styled.p`
  min-width: 0;
  max-width: 100%;
  margin: 8px 0 0;
  color: black;
  font-family: ${({ theme }) => theme.customFonts.bodyM.fontFamily};
  font-size: ${({ theme }) => theme.customFonts.bodyM.fontSize};
  font-weight: ${({ theme }) => theme.customFonts.bodyM.fontWeight};
  line-height: ${({ theme }) => theme.customFonts.bodyM.lineHeight};
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: anywhere;

  @media screen and (min-width: 1366px) {
    font-size: ${({ theme }) => theme.customFonts.body.fontSize};
    line-height: ${({ theme }) => theme.customFonts.body.lineHeight};
  }
`;
