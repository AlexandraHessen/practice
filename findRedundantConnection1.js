/**
 * @param {number[][]} edges
 * @return {number[]}
 */

 // edges = [[1,2],[1,3],[2,3]]
 var findRedundantConnection = function(edges) {
    // i = [1,2]
    let obj = {};

    for (let i = 0; i < edges.length; i++){
        let node1 = edges[i][0];
        let node2 = edges[i][1];

        if ( !obj[node1] ) {
            obj[node1] = 1;
        } else {
            obj[node1]++;
        }

        if ( !obj[node2] ) {
            obj[node2] = 1;
        } else {
            obj[node2]++;
        }

        if ( obj[node1] > 1 && obj[node2] > 1){
            return edges[i];
        }


        
    }
};