"use client";

import { Comments } from "components/molecules/Icons/Comments";
import Typography from "components/atoms/Typography";
import styled from "styled-components";
import { StatisticsItem } from "../../../types/StatisticsItem";
import { Eye } from "components/molecules/Icons/Eye";
import { Thumb } from "components/molecules/Icons/Thumb";
import Link from "next/link";

interface StatisticBarProps {
  commentsPath?: string;
  statistics: StatisticsItem;
}

export const StatisticBar = ({
  commentsPath,
  statistics,
}: StatisticBarProps) => {
  return (
    <Container data-testid="statistic-bar">
      <Item>
        <Counter>
          <Typography variant="small">{statistics.views}</Typography>
        </Counter>
        <Eye />
      </Item>
      <LinkItem href={commentsPath ?? "#"}>
        <Counter>
          <Typography variant="small">{statistics.comments}</Typography>
        </Counter>
        <Comments />
      </LinkItem>
      <Item>
        <Counter>
          <Typography variant="small">{statistics.likes}</Typography>
        </Counter>
        <ThumbDown />
      </Item>
      <Item>
        <Counter>
          <Typography variant="small">{statistics.dislikes}</Typography>
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

const LinkItem = styled(Link)<{ $isClickable?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 12px 0 0;

  ${({ $isClickable }) =>
    $isClickable &&
    `
    cursor: pointer;
  `}
`;

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
