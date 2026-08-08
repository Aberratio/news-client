import { ArticleItem } from "types/ArticleItem";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";
import { PublicationSettingsItem } from "types/PublicationSettingsItem";

import {
  mapDataToArticleSummaryItems,
  SanityArticleSummaryItem,
} from "../sanity-types/SanityArticleSummaryItem";
import { sanityClient } from "../sanityClient";

const ARTICLE_SUMMARY_PROJECTION = `_id, title, isAdd, commentsDisabled, reactionsDisabled, likes, dislikes, "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, name, slug, tab->{title, name, slug, color, tabAction }, color}, author->{name, slug}, lead, publishedAt, body, mainImage, slug`;

const RELATED_POST_FILTER = `_type == "post" && !(_id in path("drafts.**")) && publishedAt <= now() && (!isAdd || isAdd == null) && _id != $articleId && !(_id in $excludedIds) && defined(slug.current) && defined(category)`;

interface FetchRelatedArticlesParams {
  article: ArticleItem;
  excludedIds?: string[];
  settings: PublicationSettingsItem["articleRecommendations"];
}

interface RelatedArticleGroups {
  commented: SanityArticleSummaryItem[];
  popular: SanityArticleSummaryItem[];
  recent: SanityArticleSummaryItem[];
  sameCategory: SanityArticleSummaryItem[];
  sameTab: SanityArticleSummaryItem[];
}

const uniqueByDocumentIdOrSlug = (items: ArticleSummaryItem[]) => {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item._id ?? item.id;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
};

const getFallbackGroupOrder = (
  strategy: PublicationSettingsItem["articleRecommendations"]["fallbackStrategy"],
  groups: Record<keyof RelatedArticleGroups, ArticleSummaryItem[]>,
) => {
  const finalGroup =
    strategy === "categoryTabPopular"
      ? groups.popular
      : strategy === "categoryTabCommented"
        ? groups.commented
        : groups.recent;

  return [groups.sameCategory, groups.sameTab, finalGroup];
};

const getRecommendationLimit = (
  settings: PublicationSettingsItem["articleRecommendations"],
) => Math.max(1, settings.limit ?? 4);

export const resolveArticleRecommendations = ({
  automaticRecommendations,
  manualRecommendations,
  settings,
}: {
  automaticRecommendations: ArticleSummaryItem[];
  manualRecommendations: ArticleSummaryItem[];
  settings: PublicationSettingsItem["articleRecommendations"];
}) => {
  if (settings.enabled === false) {
    return [];
  }

  const limit = getRecommendationLimit(settings);
  const minimumManualItems = Math.min(
    limit,
    Math.max(0, settings.minimumManualItems ?? 1),
  );
  const manual = uniqueByDocumentIdOrSlug(manualRecommendations).slice(
    0,
    limit,
  );

  if (manual.length >= minimumManualItems) {
    return manual;
  }

  const automatic = uniqueByDocumentIdOrSlug(automaticRecommendations);

  if (settings.mixManualAndAutomatic === false) {
    return automatic.slice(0, limit);
  }

  const manualIds = new Set(manual.map((item) => item._id ?? item.id));
  const fill = automatic.filter(
    (item) => !manualIds.has(item._id ?? item.id),
  );

  return [...manual, ...fill].slice(0, limit);
};

export const shouldFetchAutomaticRecommendations = ({
  manualRecommendations,
  settings,
}: {
  manualRecommendations: ArticleSummaryItem[];
  settings: PublicationSettingsItem["articleRecommendations"];
}) => {
  if (settings.enabled === false) {
    return false;
  }

  const limit = getRecommendationLimit(settings);
  const minimumManualItems = Math.min(
    limit,
    Math.max(0, settings.minimumManualItems ?? 1),
  );

  return (
    uniqueByDocumentIdOrSlug(manualRecommendations).slice(0, limit).length <
    minimumManualItems
  );
};

export const fetchRelatedArticles = async ({
  article,
  excludedIds = [],
  settings,
}: FetchRelatedArticlesParams): Promise<ArticleSummaryItem[]> => {
  if (settings.enabled === false) {
    return [];
  }

  const limit = getRecommendationLimit(settings);
  const candidateLimit = Math.max(limit * 3, limit);

  const groups = await sanityClient.fetch<RelatedArticleGroups>(
    `{
      "sameCategory": *[${RELATED_POST_FILTER} && category->slug.current == $categorySlug] | order(publishedAt desc)[0...$candidateLimit]{ ${ARTICLE_SUMMARY_PROJECTION} },
      "sameTab": *[${RELATED_POST_FILTER} && category->tab->slug.current == $tabSlug] | order(publishedAt desc)[0...$candidateLimit]{ ${ARTICLE_SUMMARY_PROJECTION} },
      "recent": *[${RELATED_POST_FILTER}] | order(publishedAt desc)[0...$candidateLimit]{ ${ARTICLE_SUMMARY_PROJECTION} },
      "popular": *[${RELATED_POST_FILTER}] | order(views desc, publishedAt desc)[0...$candidateLimit]{ ${ARTICLE_SUMMARY_PROJECTION} },
      "commented": *[${RELATED_POST_FILTER}]{ ${ARTICLE_SUMMARY_PROJECTION} } | order(comments desc, publishedAt desc)[0...$candidateLimit]
    }`,
    {
      articleId: article._id,
      candidateLimit,
      categorySlug: article.category.slug,
      excludedIds,
      tabSlug: article.category.tabSlug,
    },
    { next: { tags: ["article-comments", "article-reactions"] } },
  );

  const mappedGroups = {
    commented: mapDataToArticleSummaryItems(groups.commented ?? []),
    popular: mapDataToArticleSummaryItems(groups.popular ?? []),
    recent: mapDataToArticleSummaryItems(groups.recent ?? []),
    sameCategory: mapDataToArticleSummaryItems(groups.sameCategory ?? []),
    sameTab: mapDataToArticleSummaryItems(groups.sameTab ?? []),
  };

  return uniqueByDocumentIdOrSlug(
    getFallbackGroupOrder(settings.fallbackStrategy, mappedGroups).flat(),
  ).slice(0, limit);
};
