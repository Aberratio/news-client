import { NextResponse, type NextRequest } from "next/server";
import { query } from "core/db/query";
import { sanityClient } from "core/api/sanityClient";
import { NextApiRequest } from "next";

export const GET = async (request: NextRequest): Promise<any> => {
  try {
    const allowedOrigin = request.headers.get("origin");
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get("limit") || 2;

    const comments = await query({
      query: `SELECT * FROM comments ORDER BY comments.datetime DESC LIMIT ${limit}`,
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
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    // const allowedOrigin = request.headers.get("origin");
    // const { articleSlug, author, text } = await request.json();

    // await query({
    //   query: `INSERT INTO comments(article_slug, author, text) VALUES ( ?, ?, ?)`,
    //   values: [articleSlug, author, text],
    // });

    // return Response.json(
    //   { articleSlug, author, text },
    //   {
    //     status: 200,
    //     headers: {
    //       "Access-Control-Allow-Origin": allowedOrigin || "*",
    //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    //       "Access-Control-Allow-Headers":
    //         "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
    //       "Access-Control-Max-Age": "86400",
    //     },
    //   }
    // );
    console.log(request.body);
    // const { _id, author, text, date } = JSON.parse(request.body);

    const { _id, author, text, date } = await request.json();

    sanityClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      author,
      publishedAt: date,
      text,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return Response.json(
      { error: "An error occurred adding comment" },
      { status: 500 }
    );
  }

  return Response.json({ status: "ok" }, { status: 200 });
};

export const PUT = async (request: Request) => {
  try {
    const allowedOrigin = request.headers.get("origin");
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

    return Response.json(
      { like, dislike, commentId },
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
    console.error("Error updating comment:", error);
    return Response.json(
      { error: "An error occurred updating comment" },
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
