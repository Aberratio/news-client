"use server";

import MetadataBar from "components/molecules/MetadataBar";
import { StatisticBar } from "components/molecules/SummarizationCard/StatisticBar";
import { SummarizationCardImage } from "./SummarizationCardImage";
import { SummarizationCardTitle } from "./SummarizationCardTitle";
import { SummarizationCardWrapper } from "./SummarizationCardWrapper";
import { Suspense } from "react";
import { notFound } from "next/navigation";

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
  views: number;
}

interface SummarizationCardWithStatsProps {
  item: SummarizationCardWithStatsItem;
}

export const SummarizationCardWithStats = ({
  item,
}: SummarizationCardWithStatsProps) => {
  return (
    <SummarizationCardWrapper>
      <Suspense>
        <SummarizationCardImage path={item.path} photo={item.photo} />
      </Suspense>
      <Suspense>
        <SummarizationCardTitle path={item.path} title={item.title} />
      </Suspense>
      <Suspense>
        <MetadataBar authorName={item.authorName} createdOn={item.date} />
      </Suspense>
      <Suspense>
        <StatisticBar
          statistics={{
            comments: 0,
            likes: item.likes,
            dislikes: item.dislikes,
            views: item.views,
          }}
        />
      </Suspense>
    </SummarizationCardWrapper>
  );
};
