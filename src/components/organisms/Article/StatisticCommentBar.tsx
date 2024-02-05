"use client";

import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { Thumb } from "components/molecules/Icons/Thumb";
import { fetchCommentsReaction } from "core/api/comments/fetchCommentsReaction";
import { useEffect, useState } from "react";

interface StatisticBarProps {
  commentId: number;
  likes: number;
  dislikes: number;
}

export const StatisticCommentBar = ({
  commentId,
  likes,
  dislikes,
}: StatisticBarProps) => {
  const [sessionReaction, setSessionReaction] = useState<string>("");

  useEffect(() => {
    const storedReaction = sessionStorage.getItem(`comment-${commentId}`);
    if (["like", "dislike", ""].includes(storedReaction ?? "")) {
      setSessionReaction(storedReaction ?? "");
    }
  }, [commentId]);

  const onReactionClick = async (reaction: "like" | "dislike") => {
    if (sessionReaction === "") {
      // Jest zero reakcji, klika nową
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${commentId}`, reaction);
      await fetchCommentsReaction({
        commentId,
        like: reaction === "like" ? 1 : 0,
        dislike: reaction === "dislike" ? 1 : 0,
      });
    } else if (sessionReaction !== reaction) {
      // Jest stara reakcja, klika inną
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${commentId}`, reaction);
      await fetchCommentsReaction({
        commentId,
        like: reaction === "like" ? 1 : -1,
        dislike: reaction === "dislike" ? 1 : -1,
      });
    } else {
      // Jest stara reakcja, klika tą samą
      setSessionReaction("");
      sessionStorage.setItem(`comment-${commentId}`, "");
      await fetchCommentsReaction({
        commentId,
        like: reaction === "like" ? -1 : 0,
        dislike: reaction === "dislike" ? -1 : 0,
      });
    }
  };

  return (
    <Container data-testid="statistic-bar">
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
    </Container>
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
