"use client";

import OverviewGrid from "components/atoms/OverviewGrid";
import { ArticleBox } from "components/molecules/ArticleBox/ArticleBox";

import { ArticleSummaryItem } from "../../../types/ArticleSummaryItem";
import { ArticleCardFooter } from "../ArticleCardFooter/ArticleCardFooter";

interface ArticlesOverviewBoxProps {
  dataTestId: string;
  items: ArticleSummaryItem[];
}

const ArticlesOverviewBox = ({
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
          />
        );
      })}
    </OverviewGrid>
  );
};

export default ArticlesOverviewBox;
