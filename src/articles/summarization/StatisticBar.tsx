import { Typography } from "layout/components/typography/Typography";
import styled from "styled-components";

export const StatisticBar = () => {
  return (
    <Container data-test-id="statistic-bar">
      <StatisticItemWrapper>
        <StatisticNumber>
          <Typography variant="small">99</Typography>
        </StatisticNumber>
        <StatisticIcon>👁️</StatisticIcon>
      </StatisticItemWrapper>
      <StatisticItemWrapper>
        <StatisticNumber>
          <Typography variant="small">99</Typography>
        </StatisticNumber>
        <StatisticIcon>💬</StatisticIcon>
      </StatisticItemWrapper>
      <StatisticItemWrapper>
        <StatisticNumber>
          <Typography variant="small">99</Typography>
        </StatisticNumber>
        <StatisticIcon>👁️</StatisticIcon>
      </StatisticItemWrapper>
      <StatisticItemWrapper>
        <StatisticNumber>
          <Typography variant="small">99</Typography>
        </StatisticNumber>
        <StatisticIcon>👁️</StatisticIcon>
      </StatisticItemWrapper>
    </Container>
  );
};

const StatisticIcon = styled.div`
  padding: 0 0 0 8px;
`;
const StatisticNumber = styled.div``;

const StatisticItemWrapper = styled.div`
  padding: 0 20px 0 0;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
