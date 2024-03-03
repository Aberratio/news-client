import { sanityClient } from "../sanityClient";
import { mapToArticleItem } from "../sanity-types/SanityArticleItem";
import { ArticleItem } from "types/ArticleItem";

export const fetchArticle = async (slug: string): Promise<ArticleItem> => {
  try {
    const articles = await sanityClient.fetch(
      `*[_type == "post" && slug.current == "${slug}" && !(_id in path('drafts.**'))][0]{ _id, _rev, "comments": count(*[_type == "comment" && references(^._id)]), likes, dislikes, views, title, category->{ title, slug, tab->{title, slug }}, author->{name, slug}, lead, publishedAt, body, mainImage, slug, images}`
    );

    sanityClient.patch(articles._id).inc({ views: 1 }).commit();

    return mapToArticleItem(articles);
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching article");
  }
};
