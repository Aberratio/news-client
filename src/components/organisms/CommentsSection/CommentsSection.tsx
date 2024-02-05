"use server";

import Typography from "components/atoms/Typography";
import { CommentForm } from "./CommentForm";
import { AllComments } from "./AllComments";
import { CommentItem } from "types/CommentItem";
import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { revalidateCommentsTag } from "./revalidateCommentsTag";

interface CommentsSectionProps {
  articleId: number;
  comments: CommentItem[];
}

const CommentsSection = ({ articleId, comments }: CommentsSectionProps) => {
  return (
    <div>
      <hr />
      <Typography variant="h2" marginBottom={40}>
        Komentarze
      </Typography>
      <CommentForm
        articleId={articleId}
        sendComment={fetchNewComment}
        revalidateCommentsTag={revalidateCommentsTag}
      />
      {/* <form action={fetchNewComment}></form> */}
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
