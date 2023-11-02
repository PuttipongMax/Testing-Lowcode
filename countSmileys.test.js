const countSmileys = require("./countSmileys");

test("return number smileys", () => {
    expect(countSmileys([':)', ';(', ';}', ':-D', ':~'])).toEqual(2);
});

test("return number smileys", () => {
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toEqual(3);
});

test("return number smileys", () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toEqual(1);
});

