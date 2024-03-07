import { useEffect, useState } from "react";
import { fetchArticleReaction } from "core/api/articles/fetchArticleReaction";

export const useArticleReactionHandler = (articleId: string) => {
  const [sessionReaction, setSessionReaction] = useState<string>("");

  const reload = () => {
    const storedReaction = sessionStorage.getItem(`article-${articleId}`);
    if (["like", "dislike", ""].includes(storedReaction ?? "")) {
      setSessionReaction(storedReaction ?? "");
    }
  };

  useEffect(() => {
    reload();
  }, [articleId]);

  const handleReaction = (reaction: "like" | "dislike") => {
    if (sessionReaction === "") {
      setSessionReaction(reaction);
      sessionStorage.setItem(`article-${articleId}`, reaction);
      fetchArticleReaction({
        articleId,
        like: reaction === "like" ? 1 : 0,
        dislike: reaction === "dislike" ? 1 : 0,
      });
    } else if (sessionReaction !== reaction) {
      setSessionReaction(reaction);
      sessionStorage.setItem(`article-${articleId}`, reaction);
      fetchArticleReaction({
        articleId,
        like: reaction === "like" ? 1 : -1,
        dislike: reaction === "dislike" ? 1 : -1,
      });
    } else {
      setSessionReaction("");
      sessionStorage.setItem(`article-${articleId}`, "");
      fetchArticleReaction({
        articleId,
        like: reaction === "like" ? -1 : 0,
        dislike: reaction === "dislike" ? -1 : 0,
      });
    }
  };

  return { sessionReaction, handleReaction, reload };
};
