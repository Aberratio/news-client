import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { mapDataToArticleSummaryItems } from "../sanity-types/SanityArticleSummaryItem";
import { sanityClient } from "../sanityClient";

interface FetchArticlesLastParams {
  categorySlug?: string;
  ignorePinnedPost?: boolean;
  limit?: number;
  page?: number;
  tabSlug?: string;
}

export const fetchArticlesLast = async ({
  categorySlug,
  ignorePinnedPost = false,
  limit = 10,
  page = 1,
  tabSlug,
}: FetchArticlesLastParams): Promise<ArticleSummaryItem[]> => {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const articles = await sanityClient.fetch(
    `*[_type == "post" && !(_id in path('drafts.**')) && (publishedAt <= now()) ${
      categorySlug ? `&& category->slug.current == "${categorySlug}"` : ""
    } ${tabSlug ? `&& category->tab->slug.current == "${tabSlug}"` : ""} ${
      ignorePinnedPost ? `&& !(_id in *[_type=="pinnedPost"].post._ref)` : ""
    }
  ]{ _id, title, likes, dislikes, "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug} | order(publishedAt desc) [${start}..${end}]`,
    undefined,
    { next: { tags: ["article-comments", "article-reactions"] } }
  );

  return mapDataToArticleSummaryItems(articles);
};
