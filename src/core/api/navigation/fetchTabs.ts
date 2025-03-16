import { sanityClient } from "core/api/sanityClient";
import { TabItem } from "types/TabItem";

import { mapToTabItem } from "../sanity-types/SanityTabItem";

export const fetchTabs = async (): Promise<TabItem[]> => {
  const tabs = await sanityClient.fetch(
    '*[_type == "tab" && !(_id in path("drafts.**")) ]{name, slug, order, image, description, "categories": *[_type=="category" && references(^._id)]{ name, slug, image, description }} | order(order asc)'
  );

  return mapToTabItem(tabs);
};
