import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
