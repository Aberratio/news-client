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
  const [sessionLike, setSessionLike] = useState<number>(likes);
  const [sessionDislike, setSessionDislike] = useState<number>(dislikes);

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

      if (reaction === "like") {
        fetchArticleReaction({
          _id,
          like: 1,
          dislike: 0,
        });
        setSessionLike(sessionLike + 1);
      } else if (reaction === "dislike") {
        fetchArticleReaction({
          _id,
          like: 0,
          dislike: 1,
        });
        setSessionDislike(sessionDislike + 1);
      }
    } else if (sessionReaction !== reaction) {
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${_id}`, reaction);

      if (reaction === "like") {
        fetchArticleReaction({
          _id,
          like: 1,
          dislike: -1,
        });
        setSessionLike(sessionLike + 1);
        setSessionDislike(sessionDislike - 1);
      } else if (reaction === "dislike") {
        fetchArticleReaction({
          _id,
          like: -1,
          dislike: 1,
        });
        setSessionLike(sessionLike - 1);
        setSessionDislike(sessionDislike + 1);
      }
    } else {
      setSessionReaction("");
      sessionStorage.setItem(`comment-${_id}`, "");
      fetchArticleReaction({
        _id,
        like: reaction === "like" ? -1 : 0,
        dislike: reaction === "dislike" ? -1 : 0,
      });

      if (reaction === "like") {
        fetchArticleReaction({
          _id,
          like: -1,
          dislike: 0,
        });
        setSessionLike(sessionLike - 1);
      } else if (reaction === "dislike") {
        fetchArticleReaction({
          _id,
          like: 0,
          dislike: -1,
        });
        setSessionDislike(sessionDislike - 1);
      }
    }
  };

  return (
    <StatisticBar
      commentsPath="#comments"
      comments={comments}
      dislikes={sessionDislike}
      isLikeActive={sessionReaction === "like"}
      isDislikeActive={sessionReaction === "dislike"}
      likes={sessionLike}
      views={views}
      onLikeClick={() => onReactionClick("like")}
      onDislikeClick={() => onReactionClick("dislike")}
    />
  );
};
