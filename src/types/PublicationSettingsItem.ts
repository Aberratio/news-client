import { GeneralConfigItem } from "./GeneralConfigItem";
import { PhotoItem } from "./PhotoItem";

export interface PublicationSettingsItem {
  footerDescription: GeneralConfigItem["footerDescription"];
  footerLogo: PhotoItem;
  mainLogo: PhotoItem;
  mobileLogo: PhotoItem;
  name: string;
  seoDescription: string;
  seoImage: PhotoItem;
  shortName?: string;
  tagline?: string;
  titlePattern?: string;
}
