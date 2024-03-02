export const buildImageUrl = (ref: string) => {
  return `https://cdn.sanity.io/images/${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  }/production/${ref
    .slice(6)
    .replace("-webp", ".webp")
    .replace("-jpeg", ".jpeg")
    .replace("-png", ".png")
    .replace("-jpg", ".jpg")}`;
};
