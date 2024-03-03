"use server";

import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { CommentItem } from "types/CommentItem";

import Hr from "components/atoms/Hr";
import Typography from "components/atoms/Typography";

import { AllComments } from "./AllComments";
import { CommentForm } from "./CommentForm";
import { EmptyCommentsSection } from "./EmptyCommentsSection";
import { revalidateCommentsTag } from "./revalidateCommentsTag";

interface CommentsSectionProps {
  articleId: string;
  comments: CommentItem[];
}

const CommentsSection = ({ articleId, comments }: CommentsSectionProps) => {
  return (
    <div id="comments" key={comments.length}>
      <Hr />
      <Typography variant="h2" space={{ marginBottom: 40, marginTop: 24 }}>
        Komentarze
      </Typography>
      <CommentForm
        _id={articleId}
        sendComment={fetchNewComment}
        revalidateCommentsTag={revalidateCommentsTag}
      />
      {comments.length === 0 ? (
        <EmptyCommentsSection />
      ) : (
        <AllComments comments={comments} />
      )}
    </div>
  );
};

export default CommentsSection;
