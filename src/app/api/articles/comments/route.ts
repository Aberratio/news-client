import { NextResponse, type NextRequest } from "next/server";
import { query } from "core/db/query";

export const GET = async (request: NextRequest) => {
  try {
    const allowedOrigin = request.headers.get("origin");
    const searchParams = request.nextUrl.searchParams;
    const articleSlug = searchParams.get("articleSlug");

    const comments = await query({
      query: `SELECT * FROM comments WHERE article_slug like "${articleSlug}" ORDER BY comments.datetime DESC`,
      values: [],
    });

    return Response.json(comments, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return Response.json(
      { error: "An error occurred fetching comments" },
      {
        status: 500,
      }
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
