import { PublicationSettingsItem } from "types/PublicationSettingsItem";

const fallbackAlt = "Glos Milicza";

export const publicationSettingsFallback: PublicationSettingsItem = {
  advertisingLabels: {
    advertisement: "Reklama",
    sponsoredContent: "Materiał sponsorowany",
  },
  articleRecommendations: {
    enabled: true,
    fallbackStrategy: "categoryTabRecent",
    limit: 4,
    minimumManualItems: 1,
    mixManualAndAutomatic: true,
    title: "Przeczytaj rowniez",
  },
  brandColors: {
    accent: "#15a752",
    background: "#ffffff",
    onPrimary: "#ffffff",
    primary: "#2e6896",
    text: "#111111",
  },
  commentsPolicy: {
    enabled: true,
  },
  footerColumns: [
    {
      header: "Ważne informacje",
      links: [
        {
          label: "Regulamin",
          href: "/rules",
        },
        {
          label: "O nas",
          href: "/about",
        },
      ],
    },
    {
      header: "Redakcja Głosu Milicza",
      links: [
        {
          label: "71-3830-021",
          href: "tel:713830021",
        },
        {
          label: "71-3831-189",
          href: "tel:713831189",
        },
        {
          label: "sekretariat@glosmilicza.pl",
          href: "mailto:sekretariat@glosmilicza.pl",
        },
        {
          label: "gmmilicz@pro.onet.pl",
          href: "mailto:gmmilicz@pro.onet.pl",
        },
      ],
      textItems: [
        {
          text: "ul. T. Kościuszki 22",
        },
        {
          text: "56-300 Milicz",
        },
        {
          label: "NIP",
          text: "916-10-01-943",
        },
        {
          label: "REGON",
          text: "930445239",
        },
      ],
    },
  ],
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
  homepageLayout: {
    categorySectionArticleLimit: 4,
    discussedLabel: "Dyskutowane teraz",
    discussedLimit: 4,
    latestIssueLabel: "Najnowszy numer",
    latestLabel: "Najnowsze",
    latestLimit: 12,
    leadLabel: "Temat dnia",
    popularLabel: "Najczesciej czytane",
    popularLimit: 4,
    sectionOrder: [
      "lead",
      "latest",
      "discussed",
      "latestIssue",
      "categories",
      "popular",
    ],
    showCategorySections: true,
    showDiscussedSection: true,
    showLatestIssue: true,
    showPopularSection: true,
  },
  latestIssue: {
    downloadButtonLabel: "Pobierz pierwszą stronę",
    imageAlt: "Najnowszy numer",
    modalDescription:
      "Najonowszy numer Głosu Milicza możesz kupić w kioskach i punktach sprzedaży na terenie gminy Milicz, Cieszków i Krośnice.",
    releaseDatePrefix: "W sprzedaży od",
    title: "Najnowszy numer",
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
  reactionsPolicy: {
    enabled: true,
  },
  recentComments: {
    enabled: true,
    limit: 6,
    mobilePlacement: "afterContent",
    mobileTitle: "Dyskutowane teraz",
    title: "Ostatnie komentarze",
  },
  seoDescription: "Glos Milicza",
  seoImage: {
    _ref: "",
    alt: fallbackAlt,
    description: "",
    path: "/icons/logo.png",
  },
  tagline: "Niezależny tygodnik powiatowy gmin: Cieszków, Krośnice, Milicz",
  visualStyle: {
    cardStyle: "elevated",
    cornerRadius: 8,
    density: "comfortable",
    headerStyle: "masthead",
    headlineStyle: "serif",
    sectionHeaderStyle: "underline",
    themePreset: "classic",
  },
};
