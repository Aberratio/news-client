"use server";

import Typography from "components/atoms/Typography";

import MetadataBar from "../MetadataBar";

import { StatisticCommentBar } from "./StatisticCommentBar";

interface CommentProps {
  author: string;
  commentId: string;
  date: string;
  isReadOnly?: boolean;
  text: string;
  likes: number;
  dislikes: number;
}

const Comment = ({
  author,
  commentId,
  date,
  isReadOnly = false,
  text,
  likes,
  dislikes,
}: CommentProps) => {
  return (
    <div data-testid="comment">
      <MetadataBar name={author} date={date} />
      <Typography space={{ marginY: "4px" }} dataTestId="comment-text">
        {text}
      </Typography>
      {!isReadOnly && (
        <StatisticCommentBar
          commentId={commentId}
          dislikes={dislikes}
          isReadOnly={isReadOnly}
          likes={likes}
        />
      )}
    </div>
  );
};

export default Comment;
