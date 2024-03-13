import { buildImageUrl } from "core/builders/buildImageUrl";
import { PhotoItem } from "types/PhotoItem";

export interface SanityPhotoItem {
  asset: {
    _ref: string;
  };
  alt: string;
  description?: string;
}

export const mapToPhotoItem = (photo: SanityPhotoItem): PhotoItem => {
  return {
    path: buildImageUrl(photo.asset._ref),
    _ref: photo.asset._ref,
    description: photo.description || "",
    alt: photo.alt,
  };
};
