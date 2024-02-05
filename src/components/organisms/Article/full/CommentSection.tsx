"use client";

import Typography from "components/atoms/Typography";
import { CommentForm } from "./CommentForm";
import { CommentContainer } from "./CommentContainer";
import { CommentItem } from "types/CommentItem";

interface CommentSectionProps {
  comments: CommentItem[];
}

export const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <div>
      <hr />
      <Typography variant="h2" marginBottom={40}>
        Komentarze
      </Typography>
      <CommentForm />
      <div>
        <Typography>Brak komentarzy</Typography>
      </div>
      <CommentContainer comments={comments} />
    </div>
  );
};
