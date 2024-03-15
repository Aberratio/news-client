"use server";

import { sanityClient } from "./sanityClient";

interface SanityVisitsItem {
  visits: number;
}

export const fetchVisits = async (isNewVisit: boolean): Promise<number> => {
  try {
    const response: SanityVisitsItem = await sanityClient.fetch(
      `*[_type == "visitCounter" && !(_id in path('drafts.**'))][0]`
    );

    isNewVisit &&
      sanityClient.patch("visitCounter").inc({ visits: 1 }).commit();

    return response.visits;
  } catch (error) {
    console.error("Error adding visit", error);
    throw new Error("An error occurred adding visit");
  }
};
