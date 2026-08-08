import { FirstSiteItem } from "./FirstSiteItem";
import { GeneralConfigItem } from "./GeneralConfigItem";
import { MainTopicItem } from "./MainTopicItem";
import { PublicationSettingsItem } from "./PublicationSettingsItem";
import { TabItem } from "./TabItem";

export interface OrganizationItem {
  firstSite?: FirstSiteItem;
  generalConfig?: GeneralConfigItem;
  mainTopic?: MainTopicItem;
  publicationSettings?: PublicationSettingsItem;
  tabs: TabItem[];
}
