import { query } from "core/db/query";

export const PUT = async (request: Request) => {
  const { articleSlug } = await request.json();

  await query({
    query:
      "UPDATE article_reactions SET views = views + 1 WHERE article_slug = ?",
    values: [articleSlug],
  });

  return Response.json({ articleSlug }, { status: 200 });
};
