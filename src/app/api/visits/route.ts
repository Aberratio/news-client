import { query } from "core/db/query";

export const GET = async () => {
  try {
    const visits = await query({
      query: `SELECT COALESCE(SUM(amount), 0) as visits FROM visits`,
      values: [],
    });

    return Response.json(visits);
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
    const { url } = await request.json();

    await query({
      query: `INSERT INTO visits (url, amount) VALUES (?, 1)
            ON DUPLICATE KEY UPDATE amount = amount + 1 RETURNING amount;`,
      values: [url],
    });

    return Response.json({ url });
  } catch (error) {
    console.error("Error updating views:", error);
    return Response.json(
      { error: "An error occurred updating views" },
      { status: 500 }
    );
  }
};
