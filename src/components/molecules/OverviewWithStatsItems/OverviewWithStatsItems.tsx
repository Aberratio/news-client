"use server";

import OverviewGrid from "components/atoms/OverviewGrid";
import { ArticleSummarizationItem } from "../../../types/ArticleSummarizationItem";
import { SummarizationCardWithStats } from "components/molecules/SummarizationCard/SummarizationCardWithStats";

interface OverviewWithStatsItemsProps {
  dataTestId: string;
  items: ArticleSummarizationItem[];
}

const OverviewWithStatsItems = ({
  dataTestId,
  items,
}: OverviewWithStatsItemsProps) => {
  return (
    <OverviewGrid dataTestId={dataTestId}>
      {items.map((item: ArticleSummarizationItem) => {
        return (
          <SummarizationCardWithStats
            key={item.id}
            item={{
              ...item,
              authorName: item.author.name,
              date: item.createdOn,
              photo: { ...item.photo, alt: "article photo" },
            }}
          />
        );
      })}
    </OverviewGrid>
  );
};

export default OverviewWithStatsItems;
