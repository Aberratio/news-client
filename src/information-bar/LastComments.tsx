import styled from "styled-components";
import { WidgetSchema } from "./WidgetSchema";
import { Comment, CommentItem } from "./Comment";

const comment: CommentItem = {
  author: "oleska",
  title: "Wyższe podatki od nieruchomości w gminie Cieszków",
  comment:
    "Jestem matką dwójki dzieci, mieszkam w Cieszkowie i muszę przyznać, że   informacja o podwyżkach ...",
};

export const LastComments = () => {
  return (
    <WidgetSchema title="Ostatnie komentarze">
      <List>
        <Comment comment={comment} iterator={1} />
        <Comment comment={comment} iterator={2} />
        <Comment comment={comment} iterator={3} />
        <Comment comment={comment} iterator={4} />
        <Comment comment={comment} iterator={5} />
      </List>
    </WidgetSchema>
  );
};

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  padding-top: 35px;
`;
