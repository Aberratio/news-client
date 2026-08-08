require("./register-ts.cjs");

const assert = require("node:assert/strict");
const test = require("node:test");

const {
  canCommentOnPost,
  canReactToPost,
  isCommentsPolicyEnabled,
  isReactionsPolicyEnabled,
} = require("../../src/core/policies/publicationPolicies.ts");

test("missing publication policies keep existing behavior enabled", () => {
  assert.equal(isCommentsPolicyEnabled(undefined), true);
  assert.equal(isReactionsPolicyEnabled(undefined), true);
  assert.equal(canCommentOnPost(undefined, undefined), true);
  assert.equal(canReactToPost(undefined, undefined), true);
});

test("explicit disabled publication policies disable interactions globally", () => {
  assert.equal(
    canCommentOnPost(
      { commentsDisabled: false },
      { commentsPolicy: { enabled: false } },
    ),
    false,
  );
  assert.equal(
    canReactToPost(
      { reactionsDisabled: false },
      { reactionsPolicy: { enabled: false } },
    ),
    false,
  );
});

test("post flags disable only the selected interaction", () => {
  assert.equal(
    canCommentOnPost(
      { commentsDisabled: true },
      { commentsPolicy: { enabled: true } },
    ),
    false,
  );
  assert.equal(
    canReactToPost(
      { reactionsDisabled: true },
      { reactionsPolicy: { enabled: true } },
    ),
    false,
  );
});
