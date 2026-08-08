export const dynamic = "force-dynamic";

import { CommentSummaryItem } from "types/CommentSummaryItem";

import Widget from "components/molecules/Widget";

import { LastCommentsContent } from "./LastCommentsContent";

interface LastCommentsWidgetProps {
  comments: CommentSummaryItem[];
  title?: string;
}

export const LastCommentsWidget = ({
  comments,
  title = "Ostatnie komentarze",
}: LastCommentsWidgetProps) => {
  if (comments.length === 0) return null;

  return (
    <Widget dataTestId="last-comments" title={title}>
      <LastCommentsContent comments={comments} />
    </Widget>
  );
};
