"use client";

import { CounterItem } from "../CounterItem/CounterItem";
import Bar from "components/atoms/Bar";
import Box from "components/atoms/Box";

interface StatisticBarProps {
  commentsPath?: string;
  comments: number;
  dislikes: number;
  isLikeActive?: boolean;
  isDislikeActive?: boolean;
  likes: number;
  views: number;
  onLikeClick?: () => void;
  onDislikeClick?: () => void;
}

const StatisticBar = ({
  commentsPath,
  comments,
  dislikes,
  isLikeActive,
  isDislikeActive,
  likes,
  views,
  onLikeClick,
  onDislikeClick,
}: StatisticBarProps) => {
  return (
    <Bar dataTestId="statistic-bar">
      <Box>
        <CounterItem count={views} type="views" />
      </Box>
      <Box margin="0 0 0 12px">
        <CounterItem count={comments} type="comments" href={commentsPath} />
      </Box>
      <Box margin="0 0 0 12px" display="flex">
        <CounterItem
          count={likes}
          isActive={isLikeActive}
          type="likes"
          onClick={onLikeClick}
        />
        <CounterItem
          count={dislikes}
          isActive={isDislikeActive}
          type="dislikes"
          onClick={onDislikeClick}
        />
      </Box>
    </Bar>
  );
};

export default StatisticBar;
