import { sanityClient } from "core/api/sanityClient";
import { TabItem } from "types/TabItem";

import { mapToTabItem } from "../sanity-types/SanityTabItem";

export const fetchTabs = async (): Promise<TabItem[]> => {
  const tabs = await sanityClient.fetch(
    '*[_type == "tab"]{name, slug, "categories": *[_type=="category" && references(^._id)]{ name, slug }} | order(order asc)'
  );

  return mapToTabItem(tabs);
};
