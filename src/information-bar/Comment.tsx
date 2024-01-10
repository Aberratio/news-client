import styled from "styled-components";
import { Typography } from "layout/components/typography/Typography";

export interface CommentItem {
  author: string;
  title: string;
  comment: string;
}

interface CommentProps {
  comment: CommentItem;
  iterator: number;
}

export const Comment = ({ comment, iterator }: CommentProps) => {
  return (
    <Container>
      <Counter>
        <Typography>{iterator}</Typography>
      </Counter>
      <Link>
        <Title>{comment.title}</Title>
      </Link>
      <Body wordBreak="break-word">
        <strong>{comment.author}: </strong>
        <i>{comment.comment}</i>
      </Body>
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
`;

const Counter = styled.div`
  margin-right: 0.5rem !important;
  border-radius: 3px;
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Roboto-Bold;
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
`;

const Title = styled(Typography)`
  display: block;
  text-align: left;
`;

const Body = styled(Typography)`
  display: block;
  text-align: left;
  margin-top: 12px;
`;
