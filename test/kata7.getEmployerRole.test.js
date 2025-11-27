const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const jobs = [
      {
      name: "Stephen",
      age: 33,
      role: "software engineer"
      },

      {
      name: "Lee",
      age:33,
      role: "Warehouseman"
    },
    ]
    const result = getEmployerRole("Lee", jobs) 

    expect(result).toBe("Warehouseman")
  });
});
