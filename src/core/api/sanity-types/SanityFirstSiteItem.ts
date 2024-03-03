import { buildImageUrl } from "core/builders/buildImageUrl";
import { FirstSiteItem } from "types/FirstSiteItem";

export interface SanityFirstSiteItem {
  mainTopic: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  releaseDate: string;
}

export const mapDataToFirstSiteItem = (
  data: SanityFirstSiteItem
): FirstSiteItem => {
  return {
    mainTopic: data.mainTopic,
    image: {
      path: buildImageUrl(data.image.asset._ref),
    },
    releaseDate: new Date(data.releaseDate).toLocaleDateString(),
  };
};
