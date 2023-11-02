const findOdd = require('./findOdd');

test("return 'which is odd'", () => {
  expect(findOdd([7])).toEqual("which is odd");
});

test("return 'which is odd'", () => {
  expect(findOdd([0])).toEqual("which is odd");
});

test("return 'which is odd'", () => {
  expect(findOdd([1, 1, 2])).toEqual("which is odd");
});

test("return 'which is odd'", () => {
  expect(findOdd([0, 1, 0, 1, 0])).toEqual("which is odd");
});

test("return 'which is odd'", () => {
  expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toEqual("which is odd");
})