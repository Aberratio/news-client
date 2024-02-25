"use server";

interface FetchNewCommentProps {
  articleSlug: string;
  author: string;
  text: string;
}

export const fetchNewComment = async ({
  articleSlug,
  author,
  text,
}: FetchNewCommentProps): Promise<void> => {
  "use server";
  await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
    body: JSON.stringify({ author, text, articleSlug }),
  });
};
