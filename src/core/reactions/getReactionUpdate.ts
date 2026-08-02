export type Reaction = "like" | "dislike";
export type StoredReaction = Reaction | "";

export interface ReactionUpdate {
  dislike: number;
  like: number;
  nextReaction: StoredReaction;
}

export const getReactionUpdate = (
  sessionReaction: StoredReaction,
  reaction: Reaction,
): ReactionUpdate => {
  if (sessionReaction === "") {
    return {
      dislike: reaction === "dislike" ? 1 : 0,
      like: reaction === "like" ? 1 : 0,
      nextReaction: reaction,
    };
  }

  if (sessionReaction !== reaction) {
    return {
      dislike: reaction === "dislike" ? 1 : -1,
      like: reaction === "like" ? 1 : -1,
      nextReaction: reaction,
    };
  }

  return {
    dislike: reaction === "dislike" ? -1 : 0,
    like: reaction === "like" ? -1 : 0,
    nextReaction: "",
  };
};
