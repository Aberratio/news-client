"use client";

import { buildArticlePath } from "core/builders/buildPath";
import Link from "next/link";
import { CommentSummaryItem } from "types/CommentSummaryItem";

import Typography from "components/atoms/Typography";
import Comment from "components/molecules/Comment";

import { CommentContainer } from "./CommentContainer";

interface CommentSummarizationProps {
  comment: CommentSummaryItem;
  iterator: number;
}

export const CommentSummarization = ({
  comment,
  iterator,
}: CommentSummarizationProps) => {
  if (!comment) return null;

  return (
    <CommentContainer data-testid={`comment-summarization-${iterator}`}>
      <Link href={buildArticlePath(comment.articleSlug)}>
        <Typography variant="article" color="#15a752">
          {comment.articleTitle}
        </Typography>
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
    </CommentContainer>
  );
};
