// https://practice.geeksforgeeks.org/problems/shortest-path-from-1-to-n/0

function findPath(n) {
  if (n === 1) return 0;

  const visitedVertex = [];
  const notVisitedVertex = [{ vertex: 1, distance: 0 }];

  populateNotVisitedVertex();

  while (visitedVertex.length < n) {
    const currentVertex = getCloserVertex();
    const neighbors = getNeighborVertex(currentVertex);

    visitedVertex.push(currentVertex);

    for (v of neighbors) {
      const vertexesDistance = currentVertex.distance + 1;

      if (vertexesDistance < v.distance) {
        v.distance = vertexesDistance;
      }
    }
  }

  return getTargetDistance();

  function getCloserVertex() {
    return notVisitedVertex.sort((v, y) => v.distance < y.distance).shift();
  }

  function populateNotVisitedVertex() {
    for (let i = 2; i <= n; i++) {
      notVisitedVertex.push({
        vertex: i,
        distance: Number.POSITIVE_INFINITY,
      });
    }
  }

  function getNeighborVertex(currentVertex) {
    return notVisitedVertex.filter(
      (v) =>
        v.vertex === currentVertex.vertex + 1 ||
        v.vertex === currentVertex.vertex * 3
    );
  }

  function getTargetDistance() {
    return visitedVertex.pop().distance;
  }
}

module.exports = findPath;
