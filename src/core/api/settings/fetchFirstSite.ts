import { sanityClient } from "core/api/sanityClient";
import { buildImageUrl } from "core/builders/buildImageUrl";

interface SanityFirstSiteItem {
  mainTopic: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  releaseDate: string;
}

export interface FirstSiteItem {
  mainTopic: string;
  image: {
    path: string;
  };
  releaseDate: string;
}

export const fetchFirstSite = async (): Promise<FirstSiteItem> => {
  const firstSite = await sanityClient.fetch(
    '*[_type == "firstSite"][0]{image, releaseDate, mainTopic}'
  );

  return mapData(firstSite);
};

const mapData = (data: SanityFirstSiteItem): FirstSiteItem => {
  return {
    mainTopic: data.mainTopic,
    image: {
      path: buildImageUrl(data.image.asset._ref),
    },
    releaseDate: new Date(data.releaseDate).toLocaleDateString(),
  };
};
