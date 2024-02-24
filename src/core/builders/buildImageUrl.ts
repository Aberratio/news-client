export const buildImageUrl = (ref: string) => {
  return `https://cdn.sanity.io/images/lf6vr1v0/production/${ref
    .slice(6)
    .replace("-webp", ".webp")
    .replace("-jpeg", ".jpeg")
    .replace("-png", ".png")
    .replace("-jpg", ".jpg")}`;
};
