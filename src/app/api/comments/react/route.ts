import { NextResponse } from "next/server";
import { sanityClient } from "core/api/sanityClient";

export const POST = async (request: Request) => {
  try {
    console.log("jestem");
    const { _id } = await request.json();
    console.log(_id);

    sanityClient.patch(_id).inc({ likes: 1 }).commit();
  } catch (error) {
    console.error("Error adding comment:", error);
    return Response.json(
      { error: "An error occurred adding comment" },
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
