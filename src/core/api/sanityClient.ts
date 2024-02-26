import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
