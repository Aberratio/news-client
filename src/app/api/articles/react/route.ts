import { sanityClient } from "core/api/sanityClient";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { like, dislike, _id } = await request.json();

    if (like * dislike === 1) {
      return Response.json(
        { error: "An error occurred adding reaction on article" },
        { status: 500 }
      );
    }

    sanityClient.patch(_id).inc({ likes: like, dislikes: dislike }).commit();
  } catch (error) {
    console.error("Error adding reaction on article:", error);
    return Response.json(
      { error: "An error occurred adding reaction on article" },
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
