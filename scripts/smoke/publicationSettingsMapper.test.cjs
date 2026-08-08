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
  name: "Legacy GM",
};

test("publication settings resolver preserves generalConfig when publicationSettings is missing", () => {
  const settings = resolvePublicationSettings(undefined, generalConfig);

  assert.equal(settings.name, "Legacy GM");
  assert.equal(settings.commentsPolicy.enabled, true);
  assert.equal(settings.reactionsPolicy.enabled, true);
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
      publicationName: "Publication GM",
      seo: {
        defaultDescription: "Publication SEO description",
      },
    },
    generalConfig
  );

  assert.equal(settings.name, "Publication GM");
  assert.equal(settings.commentsPolicy.enabled, true);
  assert.equal(settings.reactionsPolicy.enabled, true);
  assert.equal(settings.seoDescription, "Publication SEO description");
  assert.equal(settings.mainLogo.alt, "Main logo");
  assert.equal(settings.footerLogo.alt, "Footer logo");
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
