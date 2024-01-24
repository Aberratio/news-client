import styled from "styled-components";
import { WidgetSchema } from "../WidgetSchema";
import { Comment } from "./Comment";
import { useLastComments } from "./useLastComments";
import { useEffect } from "react";

export const LastComments = () => {
  const { comments, isLoading, loadLastComments } = useLastComments();

  useEffect(() => {
    loadLastComments(5);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <WidgetSchema dataTestId="last-comments" title="Ostatnie komentarze">
      <List>
        {comments.map((comment, index) => (
          <Comment comment={comment} key={index} iterator={index + 1} />
        ))}
      </List>
    </WidgetSchema>
  );
};

const List = styled.ul`
  margin: 0;
  list-style-type: none;
`;
