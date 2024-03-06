import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-03-06",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
});
