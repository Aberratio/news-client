import Typography from "components/atoms/Typography";
import { styled } from "styled-components";
import { StatisticCommentBar } from "./StatisticCommentBar";

interface CommentProps {
  author: string;
  commentId: number;
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
      <CommentMeta>
        <Typography>
          <strong>{author}</strong>
        </Typography>
        <Typography variant="small">{date}</Typography>
      </CommentMeta>
      <Typography>{text}</Typography>
      <StatisticCommentBar
        commentId={commentId}
        isReadOnly={isReadOnly}
        likes={likes}
        dislikes={dislikes}
      />
    </div>
  );
};

export default Comment;

const CommentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
