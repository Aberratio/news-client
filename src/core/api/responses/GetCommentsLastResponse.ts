export interface GetCommentsLastResponse {
  articleId: number;
  comment: string;
  commentedOn: Date;
  id: number;
  isVisible: boolean;
  user: string;
  articleTitle: string;
}
