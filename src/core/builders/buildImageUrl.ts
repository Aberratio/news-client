import { sanityProjectId } from "core/api/sanityProject";

export const buildImageUrl = (ref: string) => {
  return `https://cdn.sanity.io/images/${sanityProjectId}/production/${ref
    .slice(6)
    .replace("-webp", ".webp")
    .replace("-jpeg", ".jpeg")
    .replace("-png", ".png")
    .replace("-jpg", ".jpg")}`;
};
