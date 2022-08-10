const pattern   = require("../lib/pattern.js");
const validator = require("../lib/validate.js");
const defaultPattern = pattern.default;
const releasePattern = pattern.release;

// true

test("feat/#124/toto", () => {
  expect(validator.test("feat/#124/toto", defaultPattern)).toBe(true);
});

test("feat/NEO-23/toto", () => {
  expect(validator.test("feat/NEO-23/toto", defaultPattern)).toBe(true);
});

test("fix/#344/toto", () => {
  expect(validator.test("fix/#344/toto", defaultPattern)).toBe(true);
});

test("release/v0.1.1", () => {
  expect(validator.test("release/v0.1.1", releasePattern)).toBe(true);
});

test("release/v0.1.1-beta", () => {
  expect(validator.test("release/v0.1.1-beta", releasePattern)).toBe(true);
});

test("test/#112/toto", () => {
  expect(validator.test("test/#112/toto", defaultPattern)).toBe(true);
});

test("doc/#897/toto", () => {
  expect(validator.test("doc/#897/toto", defaultPattern)).toBe(true);
});



//false

test("release/0.1.1", () => {
  expect(validator.test("release/0.1.1", releasePattern)).toBe(false);
});

test("release/#0.1.1", () => {
  expect(validator.test("release/#0.1.1", releasePattern)).toBe(false);
});

test("release/v0.1.1/toto", () => {
  expect(validator.test("release/v0.1.1/toto", releasePattern)).toBe(false);
});

test("release/#124/toto", () => {
  expect(validator.test("release/#124/toto", releasePattern)).toBe(false);
});

test("feat/#124/toto/titi", () => {
  expect(validator.test("feat/#124/toto/titi", defaultPattern)).toBe(false);
});

test("feature/#124/toto", () => {
  expect(validator.test("feature/#124/toto", defaultPattern)).toBe(false);
});

test("bugfix/#344/toto", () => {
  expect(validator.test("bugfix/#344/toto", defaultPattern)).toBe(false);
});

test("hotfix/#4561/toto", () => {
  expect(validator.test("hotfix/#4561/toto", defaultPattern)).toBe(false);
});

test("feature/toto", () => {
  expect(validator.test("feature/toto", defaultPattern)).toBe(false);
});

test("refactor/#765/toto", () => {
  expect(validator.test("refactor/#765/toto", defaultPattern)).toBe(false);
});

test("refactor/toto", () => {
  expect(validator.test("refactor/toto", defaultPattern)).toBe(false);
});

test("test/toto", () => {
  expect(validator.test("test/toto", defaultPattern)).toBe(false);
});

test("doc/toto", () => {
  expect(validator.test("doc/toto", defaultPattern)).toBe(false);
});

test("build/#897/toto", () => {
  expect(validator.test("build/#897/toto", defaultPattern)).toBe(false);
});

test("feature\toto", () => {
  expect(validator.test("feature\toto", defaultPattern)).toBe(false);
});

test("documentation/toto", () => {
  expect(validator.test("documentation/toto", defaultPattern)).toBe(false);
});

test("feat/toto", () => {
  expect(validator.test("feat/toto", defaultPattern)).toBe(false);
});

test("DOC/toto", () => {
  expect(validator.test("DOC/toto", defaultPattern)).toBe(false);
});