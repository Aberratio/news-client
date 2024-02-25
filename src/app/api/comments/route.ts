import { type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest): Promise<any> => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit") || 2;

    const comments = await query({
      query: `SELECT * FROM comments ORDER BY comments.datetime DESC LIMIT ${limit}`,
      values: [],
    });

    return Response.json(comments, { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return Response.json(
      { error: "An error occurred fetching comments" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const { articleSlug, author, text } = await request.json();

    await query({
      query: `INSERT INTO comments(article_slug, author, text) VALUES ( ?, ?, ?)`,
      values: [articleSlug, author, text],
    });

    return Response.json({ articleSlug, author, text }, { status: 200 });
  } catch (error) {
    console.error("Error adding comment:", error);
    return Response.json(
      { error: "An error occurred adding comment" },
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request) => {
  try {
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
  } catch (error) {
    console.error("Error updating comment:", error);
    return Response.json(
      { error: "An error occurred updating comment" },
      { status: 500 }
    );
  }
};
