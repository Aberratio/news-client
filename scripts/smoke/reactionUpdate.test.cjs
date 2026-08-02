require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  getReactionUpdate,
} = require("../../src/core/reactions/getReactionUpdate.ts");

test("reaction update adds the first selected reaction", () => {
  assert.deepEqual(getReactionUpdate("", "like"), {
    dislike: 0,
    like: 1,
    nextReaction: "like",
  });
  assert.deepEqual(getReactionUpdate("", "dislike"), {
    dislike: 1,
    like: 0,
    nextReaction: "dislike",
  });
});

test("reaction update switches between like and dislike", () => {
  assert.deepEqual(getReactionUpdate("like", "dislike"), {
    dislike: 1,
    like: -1,
    nextReaction: "dislike",
  });
  assert.deepEqual(getReactionUpdate("dislike", "like"), {
    dislike: -1,
    like: 1,
    nextReaction: "like",
  });
});

test("reaction update removes the selected reaction", () => {
  assert.deepEqual(getReactionUpdate("like", "like"), {
    dislike: 0,
    like: -1,
    nextReaction: "",
  });
  assert.deepEqual(getReactionUpdate("dislike", "dislike"), {
    dislike: -1,
    like: 0,
    nextReaction: "",
  });
});
