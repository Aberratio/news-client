export const dynamic = "force-dynamic";

import Widget from "components/molecules/Widget";
import { LastCommentsContent } from "./LastCommentsContent";

interface LastCommentsWidgetProps {
  comments: any;
}

export const LastCommentsWidget = ({ comments }: LastCommentsWidgetProps) => {
  if (comments.length === 0) return null;

  return (
    <Widget dataTestId="last-comments" title="Ostatnie komentarze">
      <LastCommentsContent comments={comments} />
    </Widget>
  );
};
