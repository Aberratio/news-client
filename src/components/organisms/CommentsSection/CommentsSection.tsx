"use client";

import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { styled } from "styled-components";
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
    <Section id="comments" key={comments.length}>
      <Hr margin="0 0 48px 0" />
      <CommentForm _id={articleId} sendComment={fetchNewComment} />
      {comments.length === 0 ? (
        <EmptyCommentsSection />
      ) : (
        <AllComments comments={comments} />
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-width: 0;
  scroll-margin-top: 72px;

  @media screen and (max-width: 767px) {
    padding: 0 12px;
    box-sizing: border-box;
  }
`;

export default CommentsSection;
