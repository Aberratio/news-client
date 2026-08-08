import { PublicationSettingsItem } from "types/PublicationSettingsItem";

const fallbackAlt = "Glos Milicza";

export const publicationSettingsFallback: PublicationSettingsItem = {
  footerDescription: [
    {
      _key: "publication-settings-fallback-description",
      _type: "block",
      children: [
        {
          _key: "publication-settings-fallback-description-child",
          _type: "span",
          marks: [],
          text: "Glos Milicza",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  footerLogo: {
    _ref: "",
    alt: fallbackAlt,
    description: "",
    path: "/icons/logo_footer.png",
  },
  mainLogo: {
    _ref: "",
    alt: fallbackAlt,
    description: "",
    path: "/icons/logo.png",
  },
  mobileLogo: {
    _ref: "",
    alt: fallbackAlt,
    description: "",
    path: "/icons/logo_mobile.png",
  },
  name: "Glos Milicza",
  seoDescription: "Glos Milicza",
  seoImage: {
    _ref: "",
    alt: fallbackAlt,
    description: "",
    path: "/icons/logo.png",
  },
};
