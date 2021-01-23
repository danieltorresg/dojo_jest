const cal = require("./calculator");

describe("add Operator", () => {
  test("adds 1 + 1 to equals 2", () => {
    let value = cal.add(1, 1);
    expect(value).toBe(2);
  });
  test("adds 5 + 2 to equals 7", () => {
    let value = cal.add(5, 2);
    expect(value).toBe(7);
  });
});

describe("subtract Operator", () => {
  test("subtract 2 - 1 to equals 1", () => {
    let value = cal.subtract(2, 1);
    expect(value).toBe(1);
  });
  test("subtract 5 - 2 to equals 7", () => {
    let value = cal.subtract(5, 2);
    expect(value).toBe(3);
  });
});
