import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { mapDataToArticleSummaryItems } from "../sanity-types/SanityArticleSummaryItem";
import { sanityClient } from "../sanityClient";

export const fetchPinnedArticle = async (): Promise<ArticleSummaryItem> => {
  const articles = await sanityClient.fetch(
    `*[_type == "post" && !(_id in path('drafts.**')) && _id in *[_type=="pinnedPost"].post._ref ]{ _id, title, likes, dislikes,  "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug}`
  );

  return mapDataToArticleSummaryItems(articles)[0];
};
