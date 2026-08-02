require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  mapToCommentItem,
  mapToCommentSummaryItem,
} = require("../../src/core/api/sanity-types/SanityCommentItem.ts");

const sanityComment = {
  _createdAt: new Date(2026, 7, 2, 10, 15, 30),
  _id: "comment-1",
  author: "Anna",
  dislikes: 2,
  likes: 5,
  post: {
    slug: {
      current: "first-post",
    },
    title: "First post",
  },
  text: "Short comment",
};

test("Sanity comment mapper keeps full comment fields", () => {
  assert.deepEqual(mapToCommentItem([sanityComment]), [
    {
      articleSlug: "first-post",
      articleTitle: "First post",
      author: "Anna",
      date: "02.08.2026 12:15:30",
      dislikes: 2,
      id: "comment-1",
      likes: 5,
      text: "Short comment",
    },
  ]);
});

test("Sanity comment summary mapper trims long text", () => {
  const longComment = {
    ...sanityComment,
    text: "A".repeat(120),
  };

  assert.deepEqual(mapToCommentSummaryItem([longComment]), [
    {
      articleSlug: "first-post",
      articleTitle: "First post",
      author: "Anna",
      date: "02.08.2026 12:15:30",
      dislikes: 2,
      id: "comment-1",
      likes: 5,
      text: `${"A".repeat(100)}...`,
    },
  ]);
});
