"use client";

import { useEffect, useState } from "react";
import { fetchArticleReaction } from "core/api/articles/fetchArticleReaction";
import { StatisticsItem } from "types/StatisticsItem";

import StatisticBar from "components/molecules/StatisticBar";

interface StatisticArticleBarProps {
  _id: string;
  commentsPath: string;
  statistics: StatisticsItem;
}

export const StatisticArticleBar = ({
  _id,
  statistics,
}: StatisticArticleBarProps) => {
  const [sessionReaction, setSessionReaction] = useState<string>("");
  const { likes, dislikes, views, comments } = statistics;

  useEffect(() => {
    const storedReaction = sessionStorage.getItem(`article-${_id}`);
    if (["like", "dislike", ""].includes(storedReaction ?? "")) {
      setSessionReaction(storedReaction ?? "");
    }
  }, [_id]);

  const onReactionClick = (reaction: "like" | "dislike") => {
    if (!_id) return;
    if (sessionReaction === "") {
      setSessionReaction(reaction);
      sessionStorage.setItem(`article-${_id}`, reaction);
      fetchArticleReaction({
        _id,
        like: reaction === "like" ? 1 : 0,
        dislike: reaction === "dislike" ? 1 : 0,
      });
    } else if (sessionReaction !== reaction) {
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${_id}`, reaction);
      fetchArticleReaction({
        _id,
        like: reaction === "like" ? 1 : -1,
        dislike: reaction === "dislike" ? 1 : -1,
      });
    } else {
      setSessionReaction("");
      sessionStorage.setItem(`comment-${_id}`, "");
      fetchArticleReaction({
        _id,
        like: reaction === "like" ? -1 : 0,
        dislike: reaction === "dislike" ? -1 : 0,
      });
    }
  };

  return (
    <StatisticBar
      commentsPath="#comments"
      comments={comments}
      dislikes={dislikes + (sessionReaction === "dislike" ? 1 : 0)}
      isLikeActive={sessionReaction === "like"}
      isDislikeActive={sessionReaction === "dislike"}
      likes={likes + (sessionReaction === "like" ? 1 : 0)}
      views={views}
      onLikeClick={() => onReactionClick("like")}
      onDislikeClick={() => onReactionClick("dislike")}
    />
  );
};
