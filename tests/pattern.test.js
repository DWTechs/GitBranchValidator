const pattern   = require("../lib/pattern.js");

test("/toto/ pattern to match", () => {
  expect(pattern.test(/toto/).toString()).toMatch(/toto/.toString());
});

test("/toto/ pattern to strict equal", () => {
  expect(pattern.test(/toto/)).toStrictEqual([/toto/]);
});

test("toto pattern as string to match", () => {
  expect(pattern.test("toto").toString()).toMatch(/toto/.toString());
});

test("toto pattern as string to strict equal", () => {
  expect(pattern.test("toto")).toStrictEqual([/toto/]);
});

test("[ pattern", () => {
  expect(pattern.test("[")).toBe(false);
});
