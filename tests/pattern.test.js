const PatternService = require("../lib/pattern.js");
const defaultPatterns = [ new RegExp('^(feat|fix|test|doc)\\/[A-Z0-9\\#-]{2,25}\\/[a-z0-9_\\.-]{3,40}$',''), 
                          new RegExp('^release\\/v[a-z0-9\\+\\.-]{3,25}$', '')
                        ];

test("['/toto/'] pattern to strict equal", () => {
  let pat = ['/toto/'];
  let reg = [new RegExp('/toto/')];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});

test("['/toto/', '/titi/'] pattern to strict equal", () => {
  let pat = ['/toto/', '/titi/'];
  let reg = [new RegExp('/toto/'), new RegExp('/titi/')];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});

test("['toto'] pattern to strict equal", () => {
  let pat = ['toto'];
  let reg = [new RegExp('toto')];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});


test("[''] pattern to strict equal", () => {
  let pat = [''];
  let reg = [/(?:)/];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});

test("[] pattern to strict equal", () => {
  let pat = [];
  expect(PatternService.getRegexps(pat)).toStrictEqual(defaultPatterns);
});

test("['/[/i'] pattern to strict equal", () => {
  let pat = ['/[/i']; //invalid pattern
  let reg = [];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});


test("['/toto/','/[/i'] pattern to strict equal", () => {
  let pat = ['/toto/','/[/i']; //invalid pattern
  let reg = [];
  expect(PatternService.getRegexps(pat)).toStrictEqual(reg);
});
