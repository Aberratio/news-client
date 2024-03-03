import { sanityClient } from "core/api/sanityClient";
import { mapDataToFirstSiteItem } from "../sanity-types/SanityFirstSiteItem";
import { FirstSiteItem } from "types/FirstSiteItem";

export const fetchFirstSite = async (): Promise<FirstSiteItem> => {
  const firstSite = await sanityClient.fetch(
    '*[_type == "firstSite"][0]{image, releaseDate, mainTopic}'
  );

  return mapDataToFirstSiteItem(firstSite);
};
