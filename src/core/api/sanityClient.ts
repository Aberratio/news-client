import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "lf6vr1v0",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
