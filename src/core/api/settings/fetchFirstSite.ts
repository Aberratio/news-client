import { sanityClient } from "core/api/sanityClient";
import { FirstSiteItem } from "types/FirstSiteItem";

import { mapDataToFirstSiteItem } from "../sanity-types/SanityFirstSiteItem";

export const fetchFirstSite = async (): Promise<FirstSiteItem> => {
  const firstSite = await sanityClient.fetch(
    '*[_type == "firstSite" && !(_id in path("drafts.**"))][0]{image, releaseDate, mainTopic}'
  );

  return mapDataToFirstSiteItem(firstSite);
};
