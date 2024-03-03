import { buildImageUrl } from "core/builders/buildImageUrl";
import { AddsItem } from "types/AddsItem";

export interface SanityAddsItem {
  mainAdd: {
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
  };
  boxAdds: {
    image: {
      alt: string;
      asset: {
        _ref: string;
      };
    };
  }[];
}

export const mapDataToAddsItem = (data: SanityAddsItem): AddsItem => {
  return {
    mainAdd: {
      image: {
        alt: data.mainAdd.image.alt,
        path: buildImageUrl(data.mainAdd.image.asset._ref),
        _ref: data.mainAdd.image.asset._ref,
      },
    },
    boxAdds: data.boxAdds.map((add) => {
      return {
        image: {
          alt: add.image.alt,
          path: buildImageUrl(add.image.asset._ref),
          _ref: data.mainAdd.image.asset._ref,
        },
      };
    }),
  };
};
