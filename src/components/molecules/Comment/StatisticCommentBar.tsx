"use client";

import styled from "styled-components";
import { useReactionHandler } from "./useReactionHandler";
import { useEffect, useState } from "react";
import { CounterItem } from "../CounterItem/CounterItem";

interface StatisticBarProps {
  commentId: string;
  dislikes: number;
  isReadOnly: boolean;
  likes: number;
  revalidateCommentReactionsTag?: any;
}

export const StatisticCommentBar = ({
  commentId,
  dislikes,
  isReadOnly,
  likes,
}: StatisticBarProps) => {
  const { sessionReaction, handleReaction, reload } =
    useReactionHandler(commentId);
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

  return (
    <Container data-testid="statistic-bar">
      <CounterItem
        count={likes + (sessionReaction === "like" ? 1 : 0)}
        isActive={selectedReaction === "like"}
        type="likes"
        onClick={isReadOnly ? undefined : () => handleClicked("like")}
      />
      <CounterItem
        count={dislikes + (selectedReaction === "dislike" ? 1 : 0)}
        isActive={selectedReaction === "dislike"}
        type="dislikes"
        onClick={isReadOnly ? undefined : () => handleClicked("dislike")}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4px;
`;
