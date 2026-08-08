"use server";

import { Suspense } from "react";
import { fetchArticleComments } from "core/api/articles/fetchArticleComments";
import { fetchPublicationInteractionSettings } from "core/api/policies/fetchInteractionPolicy";
import { canCommentOnPost, canReactToPost } from "core/policies/publicationPolicies";
import { ArticleItem } from "types/ArticleItem";

import CommentSection from "../../CommentsSection";

import { FullArticleContent } from "./FullArticleContent";
import { Recommendations } from "./Recommendations";

interface FullArticleProps {
  article: ArticleItem;
}

export const FullArticle = async ({ article }: FullArticleProps) => {
  const publicationSettings = await fetchPublicationInteractionSettings();
  const commentsEnabled = canCommentOnPost(article, publicationSettings);
  const reactionsEnabled = canReactToPost(article, publicationSettings);
  const comments = commentsEnabled
    ? await fetchArticleComments(article._id)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          console.error(error);
        })
    : [];

  return (
    <FullArticleContent article={article}>
      {commentsEnabled && (
        <Suspense>
          <CommentSection
            articleId={article._id}
            comments={comments ?? []}
            reactionsEnabled={reactionsEnabled}
          />
        </Suspense>
      )}
      <Suspense>
        <Recommendations
          recommendations={article.recommendations}
          title={publicationSettings.articleRecommendations.title}
        />
      </Suspense>
    </FullArticleContent>
  );
};
