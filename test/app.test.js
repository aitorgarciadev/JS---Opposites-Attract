import { areTheyInLove } from "../public/js/app";
import { describe, it, expect } from "vitest";

describe("areTheyInLove", () => {
  it("return true for one even and one odd petal count", () => {
    expect(areTheyInLove(2, 3)).toBe(true);
    expect(areTheyInLove(3, 4)).toBe(true);
  });

  it("return false for both even or both odd petal counts", () => {
    expect(areTheyInLove(2, 4)).toBe(false);
    expect(areTheyInLove(3, 5)).toBe(false);
  });

  it("return error message for non-integer petal counts", () => {
    expect(areTheyInLove(2.5, 3)).toBe("Petal counts need to be integers");
    expect(areTheyInLove(3, "four")).toBe("Petal counts need to be integers");
  });
});
