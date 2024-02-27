import { NextResponse } from "next/server";
import { sanityClient } from "core/api/sanityClient";

export interface SanityCommentItem {
  author: string;
  _createdAt: string;
  likes: number;
  _id: string;
  text: string;
  post: any;
}

export const POST = async (request: Request) => {
  try {
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
      likes: 0,
    });
  } catch (error) {
    console.error("Error adding comment to Sanity:", error);
    return Response.json(
      { error: "An error occurred adding comment to Sanity" },
      { status: 500 }
    );
  }

  return Response.json({ status: "ok" }, { status: 200 });
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
