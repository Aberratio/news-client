process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "project";

require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  mapPublicationSettingsToTheme,
  mapPublicationBrandColorsToTheme,
} = require("../../src/core/styles/customization/publicationTheme.ts");
const {
  lightTheme,
} = require("../../src/core/styles/customization/lightTheme.ts");

test("publication theme adapter returns lightTheme when brand colors are missing", () => {
  const customTheme = mapPublicationBrandColorsToTheme(undefined);

  assert.equal(customTheme, lightTheme);
});

test("publication theme adapter applies partial brand colors over lightTheme fallbacks", () => {
  const customTheme = mapPublicationBrandColorsToTheme({
    primary: "#ffffff",
  });

  assert.equal(customTheme.general.primaryColor, "#ffffff");
  assert.equal(customTheme.general.primaryOppositeColor, "black");
  assert.equal(customTheme.general.secondaryColor, lightTheme.general.secondaryColor);
  assert.equal(
    customTheme.buttons.primary.disabledBackgroundColor,
    lightTheme.buttons.primary.disabledBackgroundColor
  );
});

test("publication theme adapter ignores invalid editor color values", () => {
  const customTheme = mapPublicationBrandColorsToTheme({
    accent: "not-a-color",
    primary: "#123456",
  });

  assert.equal(customTheme.general.primaryColor, "#123456");
  assert.equal(customTheme.general.secondaryColor, lightTheme.general.secondaryColor);
});

test("publication theme adapter replaces unreadable editor onPrimary colors", () => {
  const customTheme = mapPublicationSettingsToTheme({
    brandColors: {
      onPrimary: "#ffffff",
      primary: "#ffffff",
    },
    visualStyle: {
      cardStyle: "flat",
      cornerRadius: 4,
      density: "compact",
      headerStyle: "masthead",
      headlineStyle: "sans",
      sectionHeaderStyle: "filled",
      themePreset: "civic",
    },
  });

  assert.equal(customTheme.general.primaryOppositeColor, "black");
  assert.equal(customTheme.publicationVisual.sectionHeaderColor, "black");
});
