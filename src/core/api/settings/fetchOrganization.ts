import { sanityClient } from "core/api/sanityClient";
import { OrganizationItem } from "types/OrganizationItem";

import { mapDataToOrganizationItem } from "../sanity-types/SanityOrganizationItem";

export const fetchOrganization = async (): Promise<OrganizationItem> => {
  const organization = await sanityClient.fetch(
    `{'firstSite': *[(_type == "firstSite" && !(_id in path("drafts.**")))][0]{show, image, releaseDate},
      'mainTopic': *[(_type == "mainTopic" && !(_id in path("drafts.**")))][0]{show, topic, "post": post->{ "slug": slug.current }},
      'tabs': *[_type == "tab" && !(_id in path("drafts.**"))]{name, slug, order, "categories": *[_type=="category" && references(^._id)]{ name, slug }} | order(order asc),
      'generalConfig': *[(_type == "generalSeo" && !(_id in path("drafts.**")))][0]
     }`
  );

  return mapDataToOrganizationItem(organization);
};
