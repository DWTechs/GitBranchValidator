const BranchService = require("../lib/branch.js");

test("get branch name", () => {
  expect(BranchService.getBranchName()).toBeTruthy();
});

