"use server";

import Typography from "components/atoms/Typography";
import { buildArticlePath } from "core/builders/buildPath";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";
import Comment from "components/molecules/Comment";
import { CommentContainer } from "./CommentContainer";
import Link from "next/link";

interface CommentSummarizationProps {
  comment: CommentSummarizationItem;
  iterator: number;
}

export const CommentSummarization = ({
  comment,
  iterator,
}: CommentSummarizationProps) => {
  return (
    <CommentContainer data-testid={`comment-summarization-${iterator}`}>
      <Link href={buildArticlePath(comment.articleId)}>
        <Typography>{comment.articleTitle}</Typography>
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
