"use client";

import styled from "styled-components";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import Typography from "components/atoms/Typography";
import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";

interface RecommendationsProps {
  recommendations: ArticleSummaryItem[];
  title?: string;
}

export const Recommendations = ({
  recommendations,
  title = "Przeczytaj również",
}: RecommendationsProps) => {
  if (recommendations.length === 0) return null;

  return (
    <Section aria-label={title}>
      <Header>
        <Typography variant="h2">{title}</Typography>
      </Header>
      <ArticlesOverviewBox
        dataTestId="recommendations"
        items={recommendations}
      />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 8px 0 56px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 0 0;
  border-top: 1px solid color-mix(in srgb, var(--publication-primary) 24%, transparent);
`;
