import { GetCommentsLastResponse } from "core/api/responses/GetCommentsLastResponse";
import { useCommentsApi } from "core/api/useCommentsApi";
import { useState } from "react";
import { CommentSummarizationItem } from "types/CommentSummarizationItem";

export const useLastComments = () => {
  const { getCommentsLastDetails } = useCommentsApi();
  const [comments, setComments] = useState<CommentSummarizationItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadLastComments = (limit: number) => {
    void getCommentsLastDetails(limit).then((data) => {
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

const mapData = (data: GetCommentsLastResponse[]): CommentSummarizationItem[] =>
  data.map((item: GetCommentsLastResponse) => {
    return {
      articleId: item.articleId,
      articleTitle: item.articleTitle,
      author: item.author,
      text: cutComment(item.text),
    } as CommentSummarizationItem;
  });
