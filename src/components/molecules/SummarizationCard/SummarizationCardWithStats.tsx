"use server";

import MetadataBar from "components/molecules/MetadataBar";
import { StatisticBar } from "components/molecules/SummarizationCard/StatisticBar";
import { SummarizationCardImage } from "./SummarizationCardImage";
import { SummarizationCardTitle } from "./SummarizationCardTitle";
import { SummarizationCardWrapper } from "./SummarizationCardWrapper";
import { fetchArticleStats } from "core/api/articles/fetchArticleStats";
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
}

interface SummarizationCardWithStatsProps {
  item: SummarizationCardWithStatsItem;
}

export const SummarizationCardWithStats = async ({
  item,
}: SummarizationCardWithStatsProps) => {
  const statistics = await fetchArticleStats(item.id);

  if (!statistics) {
    notFound();
  }

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
        <StatisticBar statistics={statistics} />
      </Suspense>
    </SummarizationCardWrapper>
  );
};
