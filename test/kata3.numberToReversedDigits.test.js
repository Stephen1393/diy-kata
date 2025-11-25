const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3,2,1]);
    expect(numberToReversedDigits(6394)).toEqual([4,9,3,6]);
    expect(numberToReversedDigits(2468)).toEqual([8,6,4,2]);
  });
});