const permuteString = require('./permuteString');

test("permuteString 'a'", () => {
  expect(permuteString("a")).toEqual(
    ["a"]
  );
});

test("permuteString 'ab'", () => {
  expect(permuteString("ab")).toEqual(
    ["ab", "ba"]
  );
});

test("permuteString 'abc'", () => {
  expect(permuteString("abc")).toEqual(
    ["abc", "acb", "bac", "bca", "cab", "cba"]
  );
});

test("permuteString 'aabb'", () => {
  expect(permuteString("aabb")).toEqual(
    ["aabb", "abab", "abba", "baab", "baba", "bbaa"]
  );
});