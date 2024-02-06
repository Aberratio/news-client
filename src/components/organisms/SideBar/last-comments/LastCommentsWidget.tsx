"use server";

import Widget from "components/molecules/Widget";
import { fetchCommentsLast } from "core/api/comments/fetchCommentsLast";
import { LastCommentsContent } from "./LastCommentsContent";

export const LastCommentsWidget = async () => {
  const comments = await fetchCommentsLast(5);

  if (comments.length === 0) return null;

  return (
    <Widget dataTestId="last-comments" title="Ostatnie komentarze">
      <LastCommentsContent comments={comments} />
    </Widget>
  );
};
