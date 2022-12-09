/**
 * @param {number[][]} edges
 * @return {number[]}
 */

// edges = [[1,2],[1,3],[2,3]]
var findRedundantConnection = function (edges) {
    const rank = new Map(new Array(edges.length).fill(1).map((_, index) => [index + 1, 1]));
    const relation = new Map(new Array(edges.length).fill(1).map((_, index) => [index + 1, index + 1]));

    for (let i = 0; i < edges.length; i++) {
        if (isCycle(...edges[i], relation, rank)) {
            return edges[i];
        }
    }

};

function isCycle(node1, node2, relation, rank) {
    const parent1 = find(relation, node1);
    const parent2 = find(relation, node2);

    if (parent1 === parent2) {
        return true;
    }

    if (parent1 >= parent2) {
        rank.set(parent1, 1 + rank.get(parent2));
        relation.set(parent2, parent1);
    } else {
        rank.set(parent2, 1 + rank.get(parent1));
        relation.set(parent1, parent2);
    }

}

function find(relation, node2) {
    let parent = relation.get(node2);
    while (parent !== relation.get(parent)) {
        parent = relation.get(parent);
    }

    return parent;
}