"use server";

import Typography from "components/atoms/Typography";
import { CommentForm } from "./CommentForm";
import { AllComments } from "./AllComments";
import { CommentItem } from "types/CommentItem";
import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { revalidateCommentsTag } from "./revalidateCommentsTag";
import { EmptyCommentsSection } from "./EmptyCommentsSection";

interface CommentsSectionProps {
  articleId: number;
  comments: CommentItem[];
}

const CommentsSection = ({ articleId, comments }: CommentsSectionProps) => {
  return (
    <div id="comments">
      <hr />
      <Typography variant="h2" space={{ marginBottom: 40, marginTop: 24 }}>
        Komentarze
      </Typography>
      <CommentForm
        articleId={articleId}
        sendComment={fetchNewComment}
        revalidateCommentsTag={revalidateCommentsTag}
      />
      {/* <form action={fetchNewComment}></form> */}
      {comments.length === 0 ? (
        <EmptyCommentsSection />
      ) : (
        <AllComments comments={comments} />
      )}
    </div>
  );
};

export default CommentsSection;
