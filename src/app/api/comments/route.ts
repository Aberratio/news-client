import { type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest): Promise<any> => {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit") || 2;

  const comments = await query({
    query: `SELECT * FROM comments ORDER BY comments.datetime DESC LIMIT ${limit}`,
    values: [],
  });

  return Response.json(comments, { status: 200 });
};

export const POST = async (request: Request) => {
  const { articleSlug, author, text } = await request.json();

  await query({
    query: `INSERT INTO comments(article_slug, author, text) VALUES ( ?, ?, ?)`,
    values: [articleSlug, author, text],
  });

  return Response.json({ articleSlug, author, text }, { status: 200 });
};

export const PUT = async (request: Request) => {
  const { like, dislike, commentId } = await request.json();

  if (like * dislike === 1) {
    Response.error();
    return;
  }

  await query({
    query:
      "UPDATE comments SET likes = likes + ?, dislikes = dislikes + ? WHERE id_comment = ?",
    values: [like, dislike, commentId],
  });

  return Response.json({ like, dislike, commentId }, { status: 200 });
};
