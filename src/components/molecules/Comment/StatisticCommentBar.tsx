"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import Typography from "components/atoms/Typography";
import { Thumb } from "components/molecules/Icons/Thumb";

import { useCommentReactionHandler } from "./useCommentReactionHandler";

interface StatisticBarProps {
  commentId: string;
  dislikes: number;
  isReadOnly: boolean;
  likes: number;
}

export const StatisticCommentBar = ({
  commentId,
  dislikes,
  isReadOnly,
  likes,
}: StatisticBarProps) => {
  const { sessionReaction, handleReaction, reload } =
    useCommentReactionHandler(commentId);
  const [selectedReaction, setSelectedReaction] = useState<string>("");

  const handleClicked = (reaction: "like" | "dislike") => {
    handleReaction(reaction);
  };

  useEffect(() => {
    setSelectedReaction(sessionReaction);
  }, [sessionReaction]);

  useEffect(() => {
    reload();
  }, [likes, dislikes]);

  const displayedLikes = likes + (selectedReaction === "like" ? 1 : 0);
  const displayedDislikes = dislikes + (selectedReaction === "dislike" ? 1 : 0);

  return (
    <Container data-testid="statistic-bar" aria-label="Reakcje na komentarz">
      <ReactionButton
        type="button"
        aria-label={`Lubię to: ${displayedLikes}`}
        aria-pressed={selectedReaction === "like"}
        $isActive={selectedReaction === "like"}
        onClick={isReadOnly ? undefined : () => handleClicked("like")}
      >
        <Thumb isActive={selectedReaction === "like"} />
        <Typography variant="small" dataTestId="likes-counter">
          {displayedLikes}
        </Typography>
      </ReactionButton>
      <ReactionButton
        type="button"
        aria-label={`Nie lubię: ${displayedDislikes}`}
        aria-pressed={selectedReaction === "dislike"}
        $isActive={selectedReaction === "dislike"}
        onClick={isReadOnly ? undefined : () => handleClicked("dislike")}
      >
        <Thumb direction="right" isActive={selectedReaction === "dislike"} />
        <Typography variant="small" dataTestId="dislikes-counter">
          {displayedDislikes}
        </Typography>
      </ReactionButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const ReactionButton = styled.button<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 48px;
  min-height: 36px;
  padding: 6px 10px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#2e6896" : "#d7dce0")};
  border-radius: 8px;
  background: ${({ $isActive }) => ($isActive ? "#eef6fc" : "#ffffff")};
  color: black;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid rgba(46, 104, 150, 0.22);
    outline-offset: 2px;
  }

  @media screen and (max-width: 567px) {
    min-height: 40px;
    padding: 7px 12px;
  }
`;
