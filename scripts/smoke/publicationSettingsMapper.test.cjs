process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "project";

require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  resolvePublicationSettings,
} = require("../../src/core/api/sanity-types/SanityOrganizationItem.ts");

const image = (ref, alt = ref) => ({
  alt,
  asset: {
    _ref: ref,
  },
});

const footerDescription = [
  {
    _key: "description",
    _type: "block",
    children: [],
    markDefs: [],
    style: "normal",
  },
];

const generalConfig = {
  description: "Legacy SEO description",
  footerDescription,
  footerLogo: image("image-footer-png", "Footer logo"),
  image: image("image-seo-jpg", "SEO image"),
  mainLogo: image("image-main-png", "Main logo"),
  mobileLogo: image("image-mobile-png", "Mobile logo"),
  name: "Legacy Publication",
};

test("publication settings resolver preserves generalConfig when publicationSettings is missing", () => {
  const settings = resolvePublicationSettings(undefined, generalConfig);

  assert.equal(settings.name, "Legacy Publication");
  assert.equal(settings.commentsPolicy.enabled, true);
  assert.equal(settings.reactionsPolicy.enabled, true);
  assert.equal(settings.articleRecommendations.enabled, true);
  assert.equal(settings.articleRecommendations.limit, 4);
  assert.equal(settings.articleRecommendations.minimumManualItems, 1);
  assert.equal(settings.articleRecommendations.fallbackStrategy, "categoryTabRecent");
  assert.equal(settings.articleRecommendations.mixManualAndAutomatic, true);
  assert.equal(
    settings.tagline,
    "Niezależny tygodnik powiatowy gmin: Cieszków, Krośnice, Milicz"
  );
  assert.equal(settings.footerColumns[0].header, "Ważne informacje");
  assert.equal(settings.footerColumns[1].links[0].label, "71-3830-021");
  assert.equal(settings.latestIssue.title, "Najnowszy numer");
  assert.equal(settings.latestIssue.releaseDatePrefix, "W sprzedaży od");
  assert.equal(settings.seoDescription, "Legacy SEO description");
  assert.equal(settings.footerDescription, footerDescription);
  assert.equal(settings.mainLogo.path, "https://cdn.sanity.io/images/project/production/main.png");
  assert.equal(settings.mobileLogo.path, "https://cdn.sanity.io/images/project/production/mobile.png");
  assert.equal(settings.footerLogo.path, "https://cdn.sanity.io/images/project/production/footer.png");
  assert.equal(settings.seoImage.path, "https://cdn.sanity.io/images/project/production/seo.jpg");
});

test("publication settings resolver lets publicationSettings override generalConfig per field", () => {
  const settings = resolvePublicationSettings(
    {
      publicationName: "Configured Publication",
      seo: {
        defaultDescription: "Publication SEO description",
      },
    },
    generalConfig
  );

  assert.equal(settings.name, "Configured Publication");
  assert.equal(settings.commentsPolicy.enabled, true);
  assert.equal(settings.reactionsPolicy.enabled, true);
  assert.equal(settings.seoDescription, "Publication SEO description");
  assert.equal(settings.mainLogo.alt, "Main logo");
  assert.equal(settings.footerLogo.alt, "Footer logo");
});

test("publication settings resolver tolerates partial publicationSettings documents", () => {
  const settings = resolvePublicationSettings(
    {
      footer: {},
      logos: {
        mainLogo: image("image-configured-main-png", "Configured main logo"),
      },
      seo: {},
    },
    generalConfig
  );

  assert.equal(settings.name, "Legacy Publication");
  assert.equal(settings.seoDescription, "Legacy SEO description");
  assert.equal(settings.mainLogo.alt, "Configured main logo");
  assert.equal(settings.mobileLogo.alt, "Mobile logo");
  assert.equal(settings.footerLogo.alt, "Footer logo");
  assert.equal(settings.footerDescription, footerDescription);
  assert.equal(settings.footerColumns[0].header, "Ważne informacje");
  assert.equal(settings.footerColumns[1].links[0].label, "71-3830-021");
});

test("publication settings resolver maps explicit policy values", () => {
  const settings = resolvePublicationSettings({
    commentsPolicy: {
      enabled: false,
      moderationRequired: true,
    },
    reactionsPolicy: {
      enabled: false,
    },
  });

  assert.equal(settings.commentsPolicy.enabled, false);
  assert.equal(settings.commentsPolicy.moderationRequired, true);
  assert.equal(settings.reactionsPolicy.enabled, false);
});

test("publication settings resolver maps optional brand colors without requiring every color", () => {
  const settings = resolvePublicationSettings({
    brandColors: {
      primary: {
        hex: "#123456",
      },
    },
  });

  assert.equal(settings.brandColors.primary, "#123456");
  assert.equal(settings.brandColors.accent, undefined);
});

test("publication settings resolver maps publication content settings", () => {
  const settings = resolvePublicationSettings({
    footer: {
      contactHeader: "Kontakt",
      contactItems: [
        {
          href: "mailto:kontakt@example.pl",
          label: "kontakt@example.pl",
        },
      ],
      editorialOffice: "ul. Testowa 1\n00-000 Testowo",
      legalHeader: "Prawo",
      legalLinks: [
        {
          href: "/rules",
          label: "Regulamin",
        },
      ],
    },
    latestIssue: {
      modalDescription: "Opis z Sanity",
      title: "Aktualne wydanie",
    },
    articleRecommendations: {
      fallbackStrategy: "categoryTabPopular",
      limit: 6,
      minimumManualItems: 3,
      mixManualAndAutomatic: false,
      title: "Polecane lokalnie",
    },
    tagline: "Hasło z Sanity",
  });

  assert.equal(settings.tagline, "Hasło z Sanity");
  assert.equal(settings.footerColumns[0].header, "Prawo");
  assert.equal(settings.footerColumns[0].links[0].href, "/rules");
  assert.equal(settings.footerColumns[1].header, "Kontakt");
  assert.equal(settings.footerColumns[1].links[0].label, "kontakt@example.pl");
  assert.equal(settings.footerColumns[1].textItems[1].text, "00-000 Testowo");
  assert.equal(settings.latestIssue.title, "Aktualne wydanie");
  assert.equal(settings.latestIssue.modalDescription, "Opis z Sanity");
  assert.equal(settings.articleRecommendations.enabled, true);
  assert.equal(settings.articleRecommendations.limit, 6);
  assert.equal(settings.articleRecommendations.minimumManualItems, 3);
  assert.equal(settings.articleRecommendations.fallbackStrategy, "categoryTabPopular");
  assert.equal(settings.articleRecommendations.mixManualAndAutomatic, false);
  assert.equal(settings.articleRecommendations.title, "Polecane lokalnie");
  assert.equal(settings.latestIssue.downloadButtonLabel, "Pobierz pierwszą stronę");
});
