process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "project";

require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  resolveArticleRecommendations,
  shouldFetchAutomaticRecommendations,
} = require("../../src/core/api/articles/fetchRelatedArticles.ts");

const settings = {
  enabled: true,
  fallbackStrategy: "categoryTabRecent",
  limit: 4,
  minimumManualItems: 2,
  mixManualAndAutomatic: true,
  title: "Related",
};

const item = (id) => ({
  _id: id,
  author: {
    id: "author",
    name: "Author",
    path: "/author/author",
  },
  category: {
    color: "#000000",
    name: "Category",
    path: "/category/category",
    slug: "category",
    tabName: "Tab",
    tabPath: "/tab/tab",
    tabSlug: "tab",
  },
  comments: 0,
  commentsDisabled: false,
  createdOn: "2026-08-08",
  dislikes: 0,
  id,
  lead: "Lead",
  likes: 0,
  path: `/article/${id}`,
  photo: {
    _ref: "",
    alt: "",
    description: "",
    path: "",
  },
  reactionsDisabled: false,
  statistics: {
    comments: 0,
    dislikes: 0,
    likes: 0,
    views: 0,
  },
  title: id,
  views: 0,
});

test("manual recommendations are enough when they meet the configured minimum", () => {
  const result = resolveArticleRecommendations({
    automaticRecommendations: [item("auto-1")],
    manualRecommendations: [item("manual-1"), item("manual-2")],
    settings,
  });

  assert.deepEqual(
    result.map((recommendation) => recommendation.id),
    ["manual-1", "manual-2"]
  );
  assert.equal(
    shouldFetchAutomaticRecommendations({
      manualRecommendations: [item("manual-1"), item("manual-2")],
      settings,
    }),
    false
  );
});

test("automatic recommendations fill manual recommendations below the minimum", () => {
  const result = resolveArticleRecommendations({
    automaticRecommendations: [item("auto-1"), item("auto-2")],
    manualRecommendations: [item("manual-1")],
    settings,
  });

  assert.deepEqual(
    result.map((recommendation) => recommendation.id),
    ["manual-1", "auto-1", "auto-2"]
  );
  assert.equal(
    shouldFetchAutomaticRecommendations({
      manualRecommendations: [item("manual-1")],
      settings,
    }),
    true
  );
});

test("automatic recommendations replace short manual lists when mixing is disabled", () => {
  const result = resolveArticleRecommendations({
    automaticRecommendations: [item("auto-1"), item("auto-2")],
    manualRecommendations: [item("manual-1")],
    settings: {
      ...settings,
      mixManualAndAutomatic: false,
    },
  });

  assert.deepEqual(
    result.map((recommendation) => recommendation.id),
    ["auto-1", "auto-2"]
  );
});

test("recommendations respect disabled setting, limit, and duplicate ids", () => {
  const limited = resolveArticleRecommendations({
    automaticRecommendations: [item("manual-1"), item("auto-1"), item("auto-2")],
    manualRecommendations: [item("manual-1")],
    settings: {
      ...settings,
      limit: 2,
    },
  });

  const disabled = resolveArticleRecommendations({
    automaticRecommendations: [item("auto-1")],
    manualRecommendations: [item("manual-1"), item("manual-2")],
    settings: {
      ...settings,
      enabled: false,
    },
  });

  assert.deepEqual(
    limited.map((recommendation) => recommendation.id),
    ["manual-1", "auto-1"]
  );
  assert.deepEqual(disabled, []);
});
