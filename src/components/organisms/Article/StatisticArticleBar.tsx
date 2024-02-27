"use client";

import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { Thumb } from "components/molecules/Icons/Thumb";
import { useEffect, useState } from "react";
import { fetchArticleReaction } from "core/api/articles/fetchArticleReaction";
import { Comments } from "components/molecules/Icons/Comments";
import { Eye } from "components/molecules/Icons/Eye";
import { StatisticsItem } from "types/StatisticsItem";
import Link from "next/link";
import Bar from "components/atoms/Bar";

interface StatisticArticleBarProps {
  _id: string;
  commentsPath: string;
  statistics: StatisticsItem;
}

export const StatisticArticleBar = ({
  _id,
  commentsPath,
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
    <Bar dataTestId="statistic-bar">
      <Item>
        <Counter>
          <Typography variant="small">{views}</Typography>
        </Counter>
        <Eye />
      </Item>
      <LinkItem href={commentsPath}>
        <Counter>
          <Typography variant="small">{comments}</Typography>
        </Counter>
        <Comments />
      </LinkItem>
      <Item onClick={() => onReactionClick("like")}>
        <Counter>
          <Typography variant="small" color="black">
            {likes + (sessionReaction === "like" ? 1 : 0)}
          </Typography>
        </Counter>
        <ThumbDown color={sessionReaction === "like" ? "blue" : "black"} />
      </Item>
      <Item onClick={() => onReactionClick("dislike")}>
        <Counter>
          <Typography variant="small" color="black">
            {dislikes + (sessionReaction === "dislike" ? 1 : 0)}
          </Typography>
        </Counter>
        <Thumb
          direction="right"
          color={sessionReaction === "dislike" ? "blue" : "black"}
        />
      </Item>
    </Bar>
  );
};

const ThumbDown = styled(Thumb)`
  margin-bottom: 4px;
`;

const Counter = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 12px 0 0;
  cursor: pointer;
  border: none;
`;

const LinkItem = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 12px 0 0;
  cursor: pointer;
`;
