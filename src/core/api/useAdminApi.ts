export const useAdminApi = () => {
  const getVisitsDetails = async (): Promise<number> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASIC_URL}/visits`,
      {
        next: { revalidate: 60, tags: ["visits"] },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
          "Access-Control-Max-Age": "86400",
        },
      }
    );

    if (response.status >= 300) throw new Error("Failed to fetch visits");
    if (response.headers.get("content-type")?.includes("text"))
      throw new Error("Failed to fetch visits");

    return response.json();
  };

  const incrementVisits = async (url: string): Promise<void> => {
    await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/visits`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
      body: JSON.stringify({ url }),
    });
  };

  return {
    getVisitsDetails,
    incrementVisits,
  };
};
