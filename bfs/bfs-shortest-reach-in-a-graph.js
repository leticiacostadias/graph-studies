// https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem

/**
 * Neste exercício eliminei a primeira
 * linha do input, responsável por determinar
 * a quantidade q de queries a serem feiras.
 * Dado que isso seria simples de adicionar
 * aqui, decidi relevar esse ponto.
 */

function ordenateDistances(input) {
  const { startingPoint, nodes, edgesList } = parseInput();
  const visitedNodes = [];
  let notVisitedNodes = [];

  populatedNotVisitedNodes();

  while (visitedNodes.length < nodes) {
    const currentNode = getCloserNode();
    const neighbors = getNeighborsNodes(currentNode);

    for (n of neighbors) {
      const neighborNode = getNeighborNode(n);

      if (neighborNode.node === startingPoint) {
        const distanceFromStartingNode = neighborNode.distance + 6;

        if (distanceFromStartingNode < currentNode.distance) {
          currentNode.distance = distanceFromStartingNode;
        }

        continue;
      }

      const distanceFromCurrentNode = currentNode.distance + 6;

      if (distanceFromCurrentNode < neighborNode.distance) {
        neighborNode.distance = distanceFromCurrentNode;
      }
    }

    visitedNodes.push(currentNode);
  }

  return getOutput();

  function parseInput() {
    const parsedInput = input.split("\n");
    const parsedFirstLine = parsedInput.shift().split(" ");

    return {
      startingPoint: Number(parsedInput.pop()),
      nodes: Number(parsedFirstLine[0]),
      edgesList: parsedInput,
    };
  }

  function populatedNotVisitedNodes() {
    for (let i = 1; i <= nodes; i++) {
      notVisitedNodes.push({
        node: i,
        distance: i === startingPoint ? 0 : Number.POSITIVE_INFINITY,
      });
    }
  }

  function getCloserNode() {
    return notVisitedNodes
      .sort((v, y) => (v.distance < y.distance ? -1 : 1))
      .shift();
  }

  function getNeighborsNodes(n) {
    return edgesList
      .filter((e) => e.match(new RegExp(`^${n.node}`)))
      .map((e) => Number(e.split(" ")[1]));
  }

  function getNeighborNode(n) {
    return (
      notVisitedNodes.find((m) => m.node === n) ||
      visitedNodes.find((m) => m.node === n)
    );
  }

  function getOutput() {
    return visitedNodes
      .sort((m, n) => (m.node < n.node ? -1 : 1))
      .reduce((d, n) => {
        if (n.node === startingPoint) return d;
        if (n.distance >= Number.POSITIVE_INFINITY) d.push(-1);
        else d.push(n.distance);

        return d;
      }, [])
      .join(" ");
  }
}

module.exports = ordenateDistances;
