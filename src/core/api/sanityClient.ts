import { createClient } from "next-sanity";

import { sanityProjectId } from "./sanityProject";

export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: "production",
  apiVersion: "v2022-03-07",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
