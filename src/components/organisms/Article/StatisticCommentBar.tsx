"use client";

import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { Thumb } from "components/molecules/Icons/Thumb";

interface StatisticBarProps {
  likes: number;
  dislikes: number;
}

export const StatisticCommentBar = ({ likes, dislikes }: StatisticBarProps) => {
  return (
    <Container data-testid="statistic-bar">
      <Item>
        <Counter>
          <Typography variant="small">{likes}</Typography>
        </Counter>
        <ThumbDown />
      </Item>
      <Item>
        <Counter>
          <Typography variant="small">{dislikes}</Typography>
        </Counter>
        <Thumb direction="right" />
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
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
