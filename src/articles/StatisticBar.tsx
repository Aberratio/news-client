import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";
import { StatisticsItem } from "./summarization/ArticleSummarizationItem";
import { Thumb } from "layout/components/icons/Thumb";
import { Comments } from "layout/components/icons/Comments";
import { Eye } from "layout/components/icons/Eye";

interface StatisticBarProps {
  statistics: StatisticsItem;
}

export const StatisticBar = ({ statistics }: StatisticBarProps) => {
  return (
    <Container data-test-id="statistic-bar">
      <Item>
        <Counter>
          <Typography variant="small">{statistics.views}</Typography>
        </Counter>
        <Eye />
      </Item>
      <Item>
        <Counter>
          <Typography variant="small">{statistics.comments}</Typography>
        </Counter>
        <Comments />
      </Item>
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
