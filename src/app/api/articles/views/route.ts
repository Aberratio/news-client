import { query } from "core/db/query";
import { NextResponse } from "next/server";

export const PUT = async (request: Request) => {
  try {
    const allowedOrigin = request.headers.get("origin");
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

    return Response.json(
      { articleSlug },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin || "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
          "Access-Control-Max-Age": "86400",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching article views:", error);
    return Response.json(
      { error: "An error occurred fetching article views" },
      { status: 500 }
    );
  }
};

export const OPTIONS = (request: Request) => {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
};
