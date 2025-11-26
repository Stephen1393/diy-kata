const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    
    const distance = 44;
    const speed = 10;

    
    const result = reachDestination(distance, speed);

    expect(result).toBe("I should be there in 4 hours 30 minutes.");
  });
});
