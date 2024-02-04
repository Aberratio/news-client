import styled from "styled-components";
import Typography from "components/atoms/Typography";
import { CommentItem } from "./CommentItem";
import { buildArticlePath } from "core/builders/buildPath";

interface CommentProps {
  comment: CommentItem;
  iterator: number;
}

export const Comment = ({ comment, iterator }: CommentProps) => {
  return (
    <Container data-testid={`comment-${iterator}`}>
      {/* <Counter>
        <Typography>{iterator}</Typography>
      </Counter> */}
      <Link href={buildArticlePath(comment.articleId)}>
        <Typography>{comment.articleTitle}</Typography>
      </Link>
      <Typography wordBreak="break-word">
        <strong>{comment.author}: </strong>
        <i>{comment.comment}</i>
      </Typography>
    </Container>
  );
};

const Container = styled.li`
  margin: 0;
  list-style-type: none;
  padding-bottom: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;

  p {
    display: inline !important;
    line-height: 1.25;
  }
`;

const Counter = styled.div`
  margin-right: 0.5rem !important;
  border-radius: 3px;
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  width: 30px;
  height: 30px;
  background-color: rgb(46, 104, 150);
`;

const Link = styled.a`
  background-color: transparent;
  touch-action: manipulation;
  transition: all 0.3s;
  width: calc(100% - 48px);
  color: #17b978;
  text-align: left;

  cursor: pointer;
  margin-bottom: 8px;

  p {
    line-height: 1.15;
  }
`;
