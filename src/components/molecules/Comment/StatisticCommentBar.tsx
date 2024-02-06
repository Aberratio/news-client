import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { Thumb } from "components/molecules/Icons/Thumb";
import { useReactionHandler } from "./useReactionHandler";

interface StatisticBarProps {
  commentId: number;
  isReadOnly: boolean;
  likes: number;
  dislikes: number;
}

export const StatisticCommentBar = ({
  commentId,
  isReadOnly,
  likes,
  dislikes,
}: StatisticBarProps) => {
  const { sessionReaction, handleReaction } = useReactionHandler(commentId);

  return (
    <Container data-testid="statistic-bar">
      <Item
        onClick={() => !isReadOnly && handleReaction("like")}
        $isReadOnly={isReadOnly}
      >
        <Counter>
          <Typography variant="small" color="black">
            {likes + (sessionReaction === "like" ? 1 : 0)}
          </Typography>
        </Counter>
        <ThumbDown isActive={sessionReaction === "like"} />
      </Item>
      <Item
        onClick={() => !isReadOnly && handleReaction("dislike")}
        $isReadOnly={isReadOnly}
      >
        <Counter>
          <Typography variant="small" color="black">
            {dislikes + (sessionReaction === "dislike" ? 1 : 0)}
          </Typography>
        </Counter>
        <Thumb direction="right" isActive={sessionReaction === "dislike"} />
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
    gap: 8px;
    padding: 0 12px 0 0;
    cursor: ${$isReadOnly ? "default" : "pointer"};
    border: none;
  `}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
