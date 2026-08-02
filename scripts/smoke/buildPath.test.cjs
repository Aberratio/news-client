require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  aboutPagePath,
  buildArticlePath,
  buildAuthorPath,
  buildCategoryPath,
  buildPhotoPath,
  buildTabPath,
  rulesPagePath,
} = require("../../src/core/builders/buildPath.ts");

test("buildPath helpers keep public route contracts", () => {
  assert.equal(buildArticlePath("first-post"), "/article/first-post");
  assert.equal(buildAuthorPath("jan-kowalski"), "/author/jan-kowalski");
  assert.equal(buildCategoryPath("sport"), "/category/sport");
  assert.equal(buildTabPath("aktualnosci"), "/tab/aktualnosci");
  assert.equal(buildPhotoPath("/images/photo.jpg"), "/images/photo.jpg");
  assert.equal(aboutPagePath, "/about");
  assert.equal(rulesPagePath, "/rules");
});
