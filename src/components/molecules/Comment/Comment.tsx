"use server";

import Typography from "components/atoms/Typography";
import { StatisticCommentBar } from "./StatisticCommentBar";
import { CommentMeta } from "./CommentMeta";
import { revalidateCommentReactionsTag } from "components/organisms/CommentsSection/revalidateCommentReactionsTag";

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
      <CommentMeta author={author} date={date} />
      <Typography space={{ marginY: 4 }}>{text}</Typography>
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
