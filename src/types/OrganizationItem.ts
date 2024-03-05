import { FirstSiteItem } from "./FirstSiteItem";
import { MainTopicItem } from "./MainTopicItem";
import { TabItem } from "./TabItem";

export interface OrganizationItem {
  firstSite?: FirstSiteItem;
  mainTopic?: MainTopicItem;
  tabs: TabItem[];
}
