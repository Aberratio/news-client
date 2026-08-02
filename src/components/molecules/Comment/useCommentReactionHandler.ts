import { useEffect, useState } from "react";
import { fetchCommentReaction } from "core/api/comments/fetchCommentReaction";
import {
  getReactionUpdate,
  StoredReaction,
} from "core/reactions/getReactionUpdate";

export const useCommentReactionHandler = (commentId: string) => {
  const [sessionReaction, setSessionReaction] = useState<StoredReaction>("");

  const reload = () => {
    const storedReaction = sessionStorage.getItem(`comment-${commentId}`) ?? "";
    if (["like", "dislike", ""].includes(storedReaction)) {
      setSessionReaction(storedReaction as StoredReaction);
    }
  };

  useEffect(() => {
    reload();
  }, [commentId]);

  const handleReaction = (reaction: "like" | "dislike") => {
    const reactionUpdate = getReactionUpdate(sessionReaction, reaction);

    setSessionReaction(reactionUpdate.nextReaction);
    sessionStorage.setItem(`comment-${commentId}`, reactionUpdate.nextReaction);
    fetchCommentReaction({
      commentId,
      like: reactionUpdate.like,
      dislike: reactionUpdate.dislike,
    });
  };

  return { sessionReaction, handleReaction, reload };
};
