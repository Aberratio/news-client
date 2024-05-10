import { buildArticlePath } from "core/builders/buildPath";
import { AddsItem } from "types/AddsItem";

import { mapToPhotoItem } from "./SanityPhotoItem";

export interface SanityAddsItem {
  mainAdd: {
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
    link?: string;
    slug?: {
      current: string;
    };
  };
  boxAdds: {
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
    link?: string;
    slug?: {
      current: string;
    };
  }[];
}

export const mapDataToAddsItem = (data: SanityAddsItem): AddsItem => {
  return {
    mainAdd: {
      image: mapToPhotoItem(data.mainAdd.image),
      link:
        (data.mainAdd.slug
          ? buildArticlePath(data.mainAdd.slug.current)
          : undefined) || data.mainAdd.link,
    },
    boxAdds: data.boxAdds?.map((add) => {
      return {
        image: mapToPhotoItem(add.image),
        link:
          (add.slug ? buildArticlePath(add.slug.current) : undefined) ||
          add.link,
      };
    }),
  };
};
