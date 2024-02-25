import { query } from "core/db/query";

export const PUT = async (request: Request) => {
  try {
    const { like, dislike, articleSlug } = await request.json();

    if (like * dislike === 1) {
      Response.error();
      return;
    }

    const existingRecord: any = await query({
      query: "SELECT * FROM article_reactions WHERE article_slug = ?",
      values: [articleSlug],
    });

    if (existingRecord.length === 0) {
      await query({
        query:
          "INSERT INTO article_reactions (article_slug, likes, dislikes) VALUES (?, ?, ?)",
        values: [articleSlug, like, dislike],
      });
    } else {
      await query({
        query:
          "UPDATE article_reactions SET likes = likes + ?, dislikes = dislikes + ? WHERE article_slug = ?",
        values: [like, dislike, articleSlug],
      });
    }

    return Response.json({ like, dislike, articleSlug }, { status: 200 });
  } catch (error) {
    console.error("Error fetching article reactions:", error);
    return Response.json(
      { error: "An error occurred fetching article reactions" },
      { status: 500 }
    );
  }
};
