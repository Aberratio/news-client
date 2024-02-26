import { query } from "core/db/query";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const allowedOrigin = request.headers.get("origin");
    const visits: any = await query({
      query: `SELECT COALESCE(SUM(amount), 0) as visits FROM visits`,
      values: [],
    });

    return Response.json(visits[0].visits, {
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
    console.error("Error fetching views:", error);
    return Response.json(
      { error: "An error occurred fetching views" },
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request) => {
  try {
    const allowedOrigin = request.headers.get("origin");
    const { url } = await request.json();

    await query({
      query: `INSERT INTO visits (url, amount) VALUES (?, 1)
            ON DUPLICATE KEY UPDATE amount = amount + 1 RETURNING amount;`,
      values: [url],
    });

    return Response.json(
      { url },
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
    console.error("Error updating views:", error);
    return Response.json(
      { error: "An error occurred updating views" },
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
