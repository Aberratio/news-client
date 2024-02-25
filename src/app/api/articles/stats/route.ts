import { type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const articleSlug = searchParams.get("articleSlug");

  const stats = await query({
    query: `SELECT * FROM article_reactions WHERE article_slug like "${articleSlug}"`,
    values: [],
  });

  return Response.json(stats, { status: 200 });
};
