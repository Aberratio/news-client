"use client";

import OverviewGrid from "components/atoms/OverviewGrid";

import { ArticleSummaryItem } from "../../../types/ArticleSummaryItem";
import {
  ArticleCardFooter,
  ArticleCardVariant,
} from "../ArticleCardFooter/ArticleCardFooter";

interface ArticlesOverviewBoxProps {
  cardVariant?: ArticleCardVariant;
  dataTestId: string;
  items: ArticleSummaryItem[];
}

const ArticlesOverviewBox = ({
  cardVariant = "standard",
  dataTestId,
  items,
}: ArticlesOverviewBoxProps) => {
  return (
    <OverviewGrid dataTestId={dataTestId}>
      {items.map((item: ArticleSummaryItem) => {
        return (
          <ArticleCardFooter
            key={item.id}
            dataTestId="article-box"
            item={item}
            variant={cardVariant}
          />
        );
      })}
    </OverviewGrid>
  );
};

export default ArticlesOverviewBox;
