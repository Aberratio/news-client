import { sanityClient } from "core/api/sanityClient";
import { mapToTabItem } from "../sanity-types/SanityTabItem";
import { TabItem } from "types/TabItem";

export const fetchTabs = async (): Promise<TabItem[]> => {
  const tabs = await sanityClient.fetch(
    '*[_type == "tab"]{name, slug, "categories": *[_type=="category" && references(^._id)]{ name, slug }} | order(order asc)'
  );

  return mapToTabItem(tabs);
};
