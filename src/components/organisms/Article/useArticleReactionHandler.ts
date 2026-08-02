import { useEffect, useState } from "react";
import { fetchArticleReaction } from "core/api/articles/fetchArticleReaction";
import {
  getReactionUpdate,
  StoredReaction,
} from "core/reactions/getReactionUpdate";

export const useArticleReactionHandler = (articleId: string) => {
  const [sessionReaction, setSessionReaction] = useState<StoredReaction>("");

  const reload = () => {
    const storedReaction = sessionStorage.getItem(`article-${articleId}`) ?? "";
    if (["like", "dislike", ""].includes(storedReaction)) {
      setSessionReaction(storedReaction as StoredReaction);
    }
  };

  useEffect(() => {
    reload();
  }, [articleId]);

  const handleReaction = (reaction: "like" | "dislike") => {
    const reactionUpdate = getReactionUpdate(sessionReaction, reaction);

    setSessionReaction(reactionUpdate.nextReaction);
    sessionStorage.setItem(`article-${articleId}`, reactionUpdate.nextReaction);
    fetchArticleReaction({
      articleId,
      like: reactionUpdate.like,
      dislike: reactionUpdate.dislike,
    });
  };

  return { sessionReaction, handleReaction, reload };
};
