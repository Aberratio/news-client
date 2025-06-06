"use client";

import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { CommentItem } from "types/CommentItem";

import Hr from "components/atoms/Hr";

import { AllComments } from "./AllComments";
import { CommentForm } from "./CommentForm";
import { EmptyCommentsSection } from "./EmptyCommentsSection";

interface CommentsSectionProps {
  articleId: string;
  comments: CommentItem[];
}

const CommentsSection = ({ articleId, comments }: CommentsSectionProps) => {
  return (
    <section id="comments" key={comments.length}>
      <Hr margin="0 0 48px 0" />
      <CommentForm _id={articleId} sendComment={fetchNewComment} />
      {comments.length === 0 ? (
        <EmptyCommentsSection />
      ) : (
        <AllComments comments={comments} />
      )}
    </section>
  );
};

export default CommentsSection;
