import styled from "styled-components";
import { CommentSummarization } from "./CommentSummarization";
import { useLastComments } from "./useLastComments";
import { useEffect } from "react";
import Widget from "components/molecules/Widget";

export const LastComments = () => {
  const { comments, isLoading, loadLastComments } = useLastComments();

  useEffect(() => {
    loadLastComments(5);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Widget dataTestId="last-comments" title="Ostatnie komentarze">
      <List>
        {comments.map((comment, index) => (
          <CommentSummarization
            comment={comment}
            key={index}
            iterator={index}
          />
        ))}
      </List>
    </Widget>
  );
};

const List = styled.ul`
  margin: 0;
  list-style-type: none;
`;
