const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
test("return correct values for 1 human year", () => {
    expect(humanCatDogYears(1)).toEqual([1,15,15]);
});

test("return correct values for 2 human years", () => {
    expect(humanCatDogYears(2)).toEqual([2,24,24])
});

test("return correct values for 3 human years", () => {
    expect(humanCatDogYears(3)).toEqual([3,28,29])
});

});
