export const useAdminApi = () => {
  const getVisitsDetails = async (): Promise<number> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASIC_URL}/visits`,
      { next: { revalidate: 60, tags: ["visits"] } }
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
      },
      body: JSON.stringify({ url }),
    });
  };

  return {
    getVisitsDetails,
    incrementVisits,
  };
};
