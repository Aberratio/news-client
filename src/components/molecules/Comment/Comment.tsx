import Typography from "components/atoms/Typography";
import { styled } from "styled-components";
import { StatisticCommentBar } from "../../organisms/Article/StatisticCommentBar";

interface CommentProps {
  author: string;
  commentId: number;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
}

export const Comment = ({
  author,
  commentId,
  date,
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
        likes={likes}
        dislikes={dislikes}
      />
    </div>
  );
};

const CommentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
