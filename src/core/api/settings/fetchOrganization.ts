import { sanityClient } from "core/api/sanityClient";
import { OrganizationItem } from "types/OrganizationItem";

import { mapDataToOrganizationItem } from "../sanity-types/SanityOrganizationItem";

export const fetchOrganization = async (): Promise<OrganizationItem> => {
  const organization = await sanityClient.fetch(
    `{'firstSite': *[(_type == "firstSite" && !(_id in path("drafts.**")))][0]{showFirstSite, image, releaseDate},
      'mainTopic': *[(_type == "mainTopic" && !(_id in path("drafts.**")))][0]{showMainTopic, topic, post->},
      'tabs': *[_type == "tab" && !(_id in path("drafts.**")) ]{name, slug, order, "categories": *[_type=="category" && references(^._id)]{ name, slug }} | order(order asc),
     }`
  );

  return mapDataToOrganizationItem(organization);
};
