import { FirstSiteItem } from "./FirstSiteItem";
import { GeneralConfigItem } from "./GeneralConfigItem";
import { MainTopicItem } from "./MainTopicItem";
import { TabItem } from "./TabItem";

export interface OrganizationItem {
  firstSite?: FirstSiteItem;
  generalConfig: GeneralConfigItem;
  mainTopic?: MainTopicItem;
  tabs: TabItem[];
}
