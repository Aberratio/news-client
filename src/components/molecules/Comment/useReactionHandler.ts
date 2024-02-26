import { useEffect, useState } from "react";
import { fetchCommentReaction } from "core/api/comments/fetchCommentReaction";

export const useReactionHandler = (commentId: string) => {
  const [sessionReaction, setSessionReaction] = useState<string>("");

  const reload = () => {
    const storedReaction = sessionStorage.getItem(`comment-${commentId}`);
    if (["like", "dislike", ""].includes(storedReaction ?? "")) {
      setSessionReaction(storedReaction ?? "");
    }
  };

  useEffect(() => {
    reload();
  }, [commentId]);

  const handleReaction = async (reaction: "like" | "dislike") => {
    if (sessionReaction === "") {
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${commentId}`, reaction);
      await fetchCommentReaction({
        commentId,
        like: reaction === "like" ? 1 : 0,
        dislike: reaction === "dislike" ? 1 : 0,
      });
    } else if (sessionReaction !== reaction) {
      setSessionReaction(reaction);
      sessionStorage.setItem(`comment-${commentId}`, reaction);
      await fetchCommentReaction({
        commentId,
        like: reaction === "like" ? 1 : -1,
        dislike: reaction === "dislike" ? 1 : -1,
      });
    } else {
      setSessionReaction("");
      sessionStorage.setItem(`comment-${commentId}`, "");
      await fetchCommentReaction({
        commentId,
        like: reaction === "like" ? -1 : 0,
        dislike: reaction === "dislike" ? -1 : 0,
      });
    }
  };

  return { sessionReaction, handleReaction, reload };
};
