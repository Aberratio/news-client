"use client";

import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { Thumb } from "components/molecules/Icons/Thumb";
import { useReactionHandler } from "./useReactionHandler";
import { useEffect, useState } from "react";

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
      <Item
        onClick={() => !isReadOnly && handleClicked("like")}
        $isReadOnly={isReadOnly}
      >
        <ThumbDown isActive={selectedReaction === "like"} />
        <Counter>
          <Typography variant="small" color="black">
            {likes + (selectedReaction === "like" ? 1 : 0)}
          </Typography>
        </Counter>
      </Item>
      <Item
        onClick={() => !isReadOnly && handleClicked("dislike")}
        $isReadOnly={isReadOnly}
      >
        <Thumb direction="right" isActive={selectedReaction === "dislike"} />
        <Counter>
          <Typography variant="small" color="black">
            {dislikes + (selectedReaction === "dislike" ? 1 : 0)}
          </Typography>
        </Counter>
      </Item>
    </Container>
  );
};

const ThumbDown = styled(Thumb)`
  margin-bottom: 4px;
`;

const Counter = styled.div``;

const Item = styled.div<{ $isReadOnly: boolean }>`
  ${({ $isReadOnly }) => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    padding: 0 12px 0 0;
    cursor: ${$isReadOnly ? "default" : "pointer"};
    border: none;
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 4px;
`;
