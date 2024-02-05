"use client";

import Typography from "components/atoms/Typography";
import { CommentForm } from "./CommentForm";
import { AllComments } from "./AllComments";
import { CommentItem } from "types/CommentItem";

interface CommentsSectionProps {
  comments: CommentItem[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  return (
    <div>
      <hr />
      <Typography variant="h2" marginBottom={40}>
        Komentarze
      </Typography>
      <CommentForm />
      {comments.length === 0 ? (
        <div>
          <Typography>Brak komentarzy</Typography>
        </div>
      ) : (
        <AllComments comments={comments} />
      )}
    </div>
  );
};

export default CommentsSection;
