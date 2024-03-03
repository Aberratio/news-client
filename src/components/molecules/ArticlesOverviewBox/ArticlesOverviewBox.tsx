"use server";

import OverviewGrid from "components/atoms/OverviewGrid";
import { ArticleBox } from "components/molecules/ArticleBox/ArticleBox";

import { ArticleSummaryItem } from "../../../types/ArticleSummaryItem";

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
      {items.map((item: ArticleSummaryItem, index: number) => {
        return (
          <ArticleBox
            key={item.id}
            dataTestId={`article-box-${index}`}
            item={item}
          />
        );
      })}
    </OverviewGrid>
  );
};

export default ArticlesOverviewBox;
