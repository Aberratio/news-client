"use server";

import MetadataBar from "components/molecules/MetadataBar";
import StatisticBar from "components/molecules/StatisticBar";
import { SummarizationCardImage } from "./SummarizationCardImage";
import { SummarizationCardTitle } from "./SummarizationCardTitle";
import { SummarizationCard } from "./SummarizationCard";
import { Suspense } from "react";

interface SummarizationCardWithStatsItem {
  authorName: string;
  date: string;
  id: string;
  title: string;
  path: string;
  photo: {
    alt: string;
    description?: string;
    path: string;
  };
  likes: number;
  dislikes: number;
  comments: number;
  views: number;
}

interface SummarizationCardWithStatsProps {
  item: SummarizationCardWithStatsItem;
}

export const SummarizationCardWithStats = ({
  item,
}: SummarizationCardWithStatsProps) => {
  return (
    <SummarizationCard>
      <Suspense>
        <SummarizationCardImage path={item.path} photo={item.photo} />
      </Suspense>
      <Suspense>
        <SummarizationCardTitle path={item.path} title={item.title} />
      </Suspense>
      <Suspense>
        <MetadataBar name={item.authorName} date={item.date} />
      </Suspense>
      <Suspense>
        <StatisticBar
          comments={item.comments}
          likes={item.likes}
          dislikes={item.dislikes}
          views={item.views}
        />
      </Suspense>
    </SummarizationCard>
  );
};
