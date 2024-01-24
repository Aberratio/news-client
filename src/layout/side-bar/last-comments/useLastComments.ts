import { GetCommentsLastResponse } from "common/api/responses/GetCommentsLastResponse";
import { useCommentsApi } from "common/api/useCommentsApi";
import { useState } from "react";
import { CommentItem } from "./CommentItem";

export const useLastComments = () => {
  const { getCommentsLastDetails } = useCommentsApi();
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadLastComments = (limit: number) => {
    getCommentsLastDetails(limit).then((data) => {
      setComments(mapData(data));
      setIsLoading(false);
    });
  };

  return {
    comments,
    isLoading,
    loadLastComments,
  };
};

const cutComment = (comment: string) => {
  return comment.length > 100 ? comment.substring(0, 100) + "..." : comment;
};

const mapData = (data: GetCommentsLastResponse[]): CommentItem[] =>
  data.map((item: GetCommentsLastResponse) => {
    return {
      articleId: item.articleId,
      articleTitle: item.articleTitle,
      author: item.user,
      comment: cutComment(item.comment),
    } as CommentItem;
  });
