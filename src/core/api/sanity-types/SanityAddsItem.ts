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
      image: mapToPhotoItem(data.mainAdd.image),
    },
    boxAdds: data.boxAdds?.map((add) => {
      return {
        image: mapToPhotoItem(add.image),
      };
    }),
  };
};
