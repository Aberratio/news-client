export interface GetChatMessagesResponse {
  data: Data[];
}

interface Data {
  content: Content[];
  run_id: string;
}

interface Content {
  type: string;
  text: ContentText;
}

interface ContentText {
  value: string;
}
