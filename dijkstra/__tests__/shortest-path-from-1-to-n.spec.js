const findPath = require("../shortest-path-from-1-to-n");
const { shortestPathFrom1ToN: input } = require("../input.json");

describe("Shortest path from 1 to n", () => {
  describe("should find the shortest path for", () => {
    it("n = 2", () => {
      expect(findPath(input[0])).toEqual(1);
    });

    it("n = 9", () => {
      expect(findPath(input[1])).toEqual(2);
    });

    it("n = 15", () => {
      expect(findPath(input[3])).toEqual(4);
    });
  });

  it("should always return 0 when there is only 1 node", () => {
    expect(findPath(input[2])).toEqual(0);
  });
});
