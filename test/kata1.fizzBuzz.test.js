const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz")
    expect(fizzBuzz(12)).toBe("Fizz")
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz")
  });expect(fizzBuzz(10)).toBe("Buzz")

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("Fizz")
    expect(fizzBuzz(30)).toBe("Fizz")
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(11)).toBe(11)
    expect(fizzBuzz(22)).toBe(22)
  });
});
