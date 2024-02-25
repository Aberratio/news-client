import { type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const articleSlug = searchParams.get("articleSlug") ?? "";

  const stats = await query({
    query: `SELECT article_reactions.*, COUNT(comments.id_comment) AS comments FROM article_reactions LEFT JOIN comments ON article_reactions.article_slug = comments.article_slug WHERE article_reactions.article_slug = ?;`,
    values: [articleSlug],
  });

  return Response.json(stats, { status: 200 });
};
