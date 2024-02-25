import { type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest) => {
  try {
    const searchParams = request.nextUrl.searchParams;
    const articleSlug = searchParams.get("articleSlug");

    const comments = await query({
      query: `SELECT * FROM comments WHERE article_slug like "${articleSlug}" ORDER BY comments.datetime DESC`,
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
