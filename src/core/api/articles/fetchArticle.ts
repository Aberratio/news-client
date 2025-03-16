import { ArticleItem } from "types/ArticleItem";

import { mapToArticleItem } from "../sanity-types/SanityArticleItem";
import { sanityClient } from "../sanityClient";

export const fetchArticle = async (slug: string): Promise<ArticleItem> => {
  try {
    const articles = await sanityClient.fetch(
      `*[_type == "post" && slug.current == "${slug}" && !(_id in path('drafts.**'))][0]{ _id, _rev, "comments": count(*[_type == "comment" && references(^._id)]), likes, dislikes, views, title, category->{ title, slug, tab->{title, slug }, color}, author->{name, slug}, lead, publishedAt, body, mainImage, slug, images, "recommendations": *[_type == 'post' && _id in ^.recommendations[]._ref]{ _id, title, isAdd, likes, dislikes, "comments": count(*[_type == "comment" && references(^._id)]), views, category->{ title, slug, tab->{title, slug }}, author->{name, slug},  lead, publishedAt, body, mainImage, slug}}`,
      undefined,
      {
        next: {
          tags: ["article-comments", "article-reactions"],
        },
      }
    );

    sanityClient.patch(articles._id).inc({ views: 1 }).commit();

    return mapToArticleItem(articles);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching article");
  }
};
