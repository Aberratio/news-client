"use server";

import Typography from "components/atoms/Typography";
import { revalidateCommentReactionsTag } from "components/organisms/CommentsSection/revalidateCommentReactionsTag";

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
    <div>
      <MetadataBar name={author} date={date} />
      <Typography space={{ marginY: "4px" }}>{text}</Typography>
      <StatisticCommentBar
        commentId={commentId}
        dislikes={dislikes}
        isReadOnly={isReadOnly}
        likes={likes}
        revalidateCommentReactionsTag={revalidateCommentReactionsTag}
      />
    </div>
  );
};

export default Comment;
