import { query } from "core/db/query";

export const PUT = async (request: Request) => {
  const { like, dislike, articleSlug } = await request.json();

  if (like * dislike === 1) {
    Response.error();
    return;
  }

  await query({
    query:
      "UPDATE article_reactions SET likes = likes + ?, dislikes = dislikes + ? WHERE article_slug = ?",
    values: [like, dislike, articleSlug],
  });

  return Response.json({ like, dislike, articleSlug }, { status: 200 });
};
