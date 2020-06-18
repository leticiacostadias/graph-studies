const ordenateDistances = require("../bfs-shortest-reach-in-a-graph");
const { bfsShortestReachInAGraph: input } = require("../input.json");

describe("Bfs shortest reach in a graph", () => {
  it("should return the right ordenation for the graph A", () => {
    expect(ordenateDistances(input[0])).toBe("-1 6");
  });

  it("should return the right ordenation for the graph B", () => {
    expect(ordenateDistances(input[1])).toBe("6 6 -1");
  });

  it("should return the right ordenation for the graph C", () => {
    expect(ordenateDistances(input[2])).toBe("6 12 18 6 -1");
  });

  it("should return the right ordenation for the graph D", () => {
    expect(ordenateDistances(input[3])).toBe("6 12 18 6 -1 -1");
  });
});
