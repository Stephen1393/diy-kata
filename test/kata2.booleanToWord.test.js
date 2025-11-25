const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("return 'yes' when returned true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  test("return 'no' when returned false", () => {
    expect(booleanToWord(false)).toBe("No");
  });

});