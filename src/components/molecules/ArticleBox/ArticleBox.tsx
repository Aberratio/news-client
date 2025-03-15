"use client";

import { Suspense } from "react";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import MetadataBar from "components/molecules/MetadataBar";
import StatisticBar from "components/molecules/StatisticBar";

import { ArticleBoxImage } from "./ArticleBoxImage";
import { ArticleBoxTitle } from "./ArticleBoxTitle";
import { ArticleBoxWraper } from "./ArticleBoxWraper";

interface ArticleBoxProps {
  dataTestId: string;
  item: ArticleSummaryItem;
}

export const ArticleBox = ({ dataTestId, item }: ArticleBoxProps) => {
  return (
    <ArticleBoxWraper dataTestId={dataTestId}>
      <Suspense>
        <ArticleBoxImage path={item.path} photo={item.photo} />
      </Suspense>
      <Suspense>
        <ArticleBoxTitle path={item.path} title={item.title} />
      </Suspense>
      <Suspense>
        <MetadataBar name={item.author.name} date={item.createdOn} />
      </Suspense>
      <Suspense>
        <StatisticBar
          comments={item.comments}
          likes={item.likes}
          dislikes={item.dislikes}
          views={item.views}
        />
      </Suspense>
    </ArticleBoxWraper>
  );
};
