"use client";

import { useEffect, useState } from "react";
import { StatisticsItem } from "types/StatisticsItem";

import StatisticBar from "components/molecules/StatisticBar";

import { useArticleReactionHandler } from "./useArticleReactionHandler";

interface StatisticArticleBarProps {
  articleId: string;
  statistics: StatisticsItem;
}

export const StatisticArticleBar = ({
  articleId,
  statistics,
}: StatisticArticleBarProps) => {
  const { comments, dislikes, likes, views } = statistics;
  const { sessionReaction, handleReaction, reload } =
    useArticleReactionHandler(articleId);
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
    <StatisticBar
      commentsPath="#comments"
      comments={comments}
      dislikes={dislikes + (selectedReaction === "dislike" ? 1 : 0)}
      isLikeActive={selectedReaction === "like"}
      isDislikeActive={selectedReaction === "dislike"}
      likes={likes + (sessionReaction === "like" ? 1 : 0)}
      views={views}
      onLikeClick={() => handleClicked("like")}
      onDislikeClick={() => handleClicked("dislike")}
    />
  );
};
