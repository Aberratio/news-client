"use client";

import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import Box from "components/atoms/Box";
import Hr from "components/atoms/Hr";
import Typography from "components/atoms/Typography";
import ArticlesOverviewBox from "components/molecules/ArticlesOverviewBox";

interface RecommendationsProps {
  recommendations: ArticleSummaryItem[];
}

export const Recommendations = ({ recommendations }: RecommendationsProps) => {
  if (recommendations.length === 0) return null;

  return (
    <Box display="flex" flexDirection="column" gap={16}>
      <Hr margin="0 0 48px 0" />
      <Typography variant="h2">Przeczytaj również</Typography>
      <ArticlesOverviewBox
        dataTestId="recommendations"
        items={recommendations}
      />
    </Box>
  );
};
