"use client";

import { fetchNewComment } from "core/api/comments/fetchNewComment";
import { styled } from "styled-components";
import { CommentItem } from "types/CommentItem";

import { AllComments } from "./AllComments";
import { CommentForm } from "./CommentForm";
import { EmptyCommentsSection } from "./EmptyCommentsSection";

interface CommentsSectionProps {
  articleId: string;
  comments: CommentItem[];
  reactionsEnabled: boolean;
}

const CommentsSection = ({
  articleId,
  comments,
  reactionsEnabled,
}: CommentsSectionProps) => {
  return (
    <Section id="comments" key={comments.length}>
      <SectionRule />
      <CommentForm _id={articleId} sendComment={fetchNewComment} />
      {comments.length === 0 ? (
        <EmptyCommentsSection />
      ) : (
        <AllComments comments={comments} reactionsEnabled={reactionsEnabled} />
      )}
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-width: 0;
  max-width: 760px;
  margin: 0 auto;
  scroll-margin-top: 72px;

  @media screen and (max-width: 767px) {
    padding: 0;
    box-sizing: border-box;
  }
`;

const SectionRule = styled.div`
  width: 100%;
  height: 1px;
  margin: 0 0 36px;
  background: color-mix(in srgb, var(--publication-primary) 24%, transparent);
`;

export default CommentsSection;
