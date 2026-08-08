import { ArticleItem } from "types/ArticleItem";

import { mapToArticleItem } from "../sanity-types/SanityArticleItem";
import { resolvePublicationSettings } from "../sanity-types/SanityOrganizationItem";
import { sanityClient } from "../sanityClient";

import {
  fetchRelatedArticles,
  resolveArticleRecommendations,
  shouldFetchAutomaticRecommendations,
} from "./fetchRelatedArticles";

export const fetchArticle = async (slug: string): Promise<ArticleItem> => {
  try {
    const data = await sanityClient.fetch(
      `{
        "article": *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
          _id,
          _rev,
          commentsDisabled,
          reactionsDisabled,
          "comments": count(*[_type == "comment" && references(^._id)]),
          likes,
          dislikes,
          views,
          title,
          category->{ title, name, slug, tab->{title, name, slug, color, tabAction }, color},
          author->{name, slug},
          lead,
          publishedAt,
          body,
          mainImage,
          slug,
          images,
          "recommendations": *[_type == "post" && _id in ^.recommendations[]._ref && !(_id in path("drafts.**"))]{
            _id,
            title,
            isAdd,
            commentsDisabled,
            reactionsDisabled,
            likes,
            dislikes,
            "comments": count(*[_type == "comment" && references(^._id)]),
            views,
            category->{ title, name, slug, tab->{title, name, slug, color, tabAction }},
            author->{name, slug},
            lead,
            publishedAt,
            body,
            mainImage,
            slug
          }
        },
        "publicationSettings": *[(_type == "publicationSettings" && !(_id in path("drafts.**")))][0]
      }`,
      { slug },
      {
        next: {
          tags: ["article-comments", "article-reactions"],
        },
      }
    );

    if (!data.article) {
      throw new Error("Article not found");
    }

    const article = mapToArticleItem(data.article);
    const publicationSettings = resolvePublicationSettings(
      data.publicationSettings,
    );
    const automaticRecommendations = shouldFetchAutomaticRecommendations({
      manualRecommendations: article.recommendations,
      settings: publicationSettings.articleRecommendations,
    })
      ? await fetchRelatedArticles({
          article,
          excludedIds: article.recommendations
            .map((recommendation) => recommendation._id)
            .filter((id): id is string => Boolean(id)),
          settings: publicationSettings.articleRecommendations,
        })
      : [];

    sanityClient.patch(article._id).inc({ views: 1 }).commit();

    return {
      ...article,
      recommendations: resolveArticleRecommendations({
        automaticRecommendations,
        manualRecommendations: article.recommendations,
        settings: publicationSettings.articleRecommendations,
      }),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching article");
  }
};
