import { buildImageUrl } from "core/builders/buildImageUrl";
import { formatDateToString } from "core/formaters/formatDateToString";
import { FirstSiteItem } from "types/FirstSiteItem";

export interface SanityFirstSiteItem {
  mainTopic: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  releaseDate: Date;
}

export const mapDataToFirstSiteItem = (
  data: SanityFirstSiteItem
): FirstSiteItem => {
  return {
    mainTopic: data.mainTopic,
    image: {
      path: buildImageUrl(data.image.asset._ref),
    },
    releaseDate: formatDateToString(data.releaseDate),
  };
};
