import { formatDateToString } from "core/builders/buildDate";
import { buildImageUrl } from "core/builders/buildImageUrl";
import {
  buildArticlePath,
  buildCategoryPath,
  buildTabPath,
} from "core/builders/buildPath";
import { ArticleSummaryItem } from "types/ArticleSummaryItem";

import { SanityArticleSummaryItem } from "../sanity-types/SanityArticleSummaryItem";
import { sanityClient } from "../sanityClient";

interface FetchArticlesLastParams {
  categorySlug?: string;
  tabSlug?: string;
  limit?: number;
  page?: number;
}

export const fetchArticlesLast = async ({
  categorySlug,
  tabSlug,
  limit = 10,
  page = 1,
}: FetchArticlesLastParams): Promise<ArticleSummaryItem[]> => {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const tabs = await sanityClient.fetch(
    `*[_type == "post" ${
      categorySlug ? `&& category->slug.current == "${categorySlug}"` : ""
    } ${
      tabSlug ? `&& category->tab->slug.current == "${tabSlug}"` : ""
    }]{ title, likes, dislikes,  "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug} | order(publishedAt desc) [${start}..${end}]`
  );

  return mapData(tabs);
};

const mapData = (data: SanityArticleSummaryItem[]): ArticleSummaryItem[] => {
  return data.map((post) => {
    return {
      author: {
        id: post.author.slug.current,
        name: post.author.name,
        path: post.author.slug.current,
      },
      category: {
        id: post.category.slug.current,
        name: post.category.name,
        path: buildCategoryPath(post.category.slug.current),
        tabSlug: post.category.tab.slug.current,
        tabName: post.category.tab.name,
        tabPath: buildTabPath(post.category.tab.slug.current),
      },
      createdOn: formatDateToString(post.publishedAt),
      id: post.slug.current,
      lead: post.lead,
      likes: post.likes,
      comments: post.comments,
      dislikes: post.dislikes,
      views: post.views,
      path: buildArticlePath(post.slug.current),
      statistics: {
        comments: 0,
        dislikes: 0,
        likes: 0,
        views: 0,
      },
      photo: {
        path: buildImageUrl(post.mainImage.asset._ref),
        description: post.mainImage.description,
        alt: post.mainImage.alt,
      },
      title: post.title,
    };
  });
};
