import { query } from "core/db/query";

export const PUT = async (request: Request) => {
  const { articleSlug } = await request.json();

  const existingRecord: any = await query({
    query: "SELECT * FROM article_reactions WHERE article_slug = ?",
    values: [articleSlug],
  });

  if (existingRecord.length === 0) {
    await query({
      query:
        "INSERT INTO article_reactions (article_slug, views) VALUES (?, 1)",
      values: [articleSlug],
    });
  } else {
    await query({
      query:
        "UPDATE article_reactions SET views = views + 1 WHERE article_slug = ?",
      values: [articleSlug],
    });
  }

  return Response.json({ articleSlug }, { status: 200 });
};
