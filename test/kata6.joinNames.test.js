const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const names = [
      {name: "Stephen"},
      {name: "Lee"},
      {name: "Natasha"}
    ]
    expect(joinNames(names)).toBe("Stephen, Lee & Natasha");
  });
});