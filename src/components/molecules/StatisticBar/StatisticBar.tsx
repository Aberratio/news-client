"use client";

import { canCommentOnPost, canReactToPost } from "core/policies/publicationPolicies";
import { useOrganizationInfo } from "providers/context/useOrganizationInfo";

import Bar from "components/atoms/Bar";
import Box from "components/atoms/Box";

import { CounterItem } from "../CounterItem/CounterItem";

interface StatisticBarProps {
  commentsPath?: string;
  comments: number;
  commentsDisabled?: boolean;
  dislikes: number;
  isLikeActive?: boolean;
  isDislikeActive?: boolean;
  likes: number;
  reactionsDisabled?: boolean;
  views: number;
  onLikeClick?: () => void;
  onDislikeClick?: () => void;
}

const StatisticBar = ({
  commentsPath,
  comments,
  commentsDisabled,
  dislikes,
  isLikeActive,
  isDislikeActive,
  likes,
  reactionsDisabled,
  views,
  onLikeClick,
  onDislikeClick,
}: StatisticBarProps) => {
  const { publicationSettings } = useOrganizationInfo();
  const showComments = canCommentOnPost(
    { commentsDisabled },
    publicationSettings
  );
  const showReactions = canReactToPost(
    { reactionsDisabled },
    publicationSettings
  );

  return (
    <Bar dataTestId="statistic-bar" gap={0}>
      <Box>
        <CounterItem count={views} type="views" />
      </Box>
      {showComments && (
        <Box margin="0 0 0 12px">
          <CounterItem count={comments} type="comments" href={commentsPath} />
        </Box>
      )}
      {showReactions && (
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
      )}
    </Bar>
  );
};

export default StatisticBar;
