/*
 * 
 * */
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","1"],
//   ["0","0","0","0","0"]
// ]
// Output: 1


//

function numberIsland(grid){
	const truthMatrix = initTruthMatrix(grid);
  let islandCount = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
      for(let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
        if (
          isIsland(grid, newRowIndex, newColIndex) &&
         	!isVisited(truthMatrix, newRowIndex, newColIndex)
        ) {
            DFS(grid, truthMatrix, rowIndex, colIndex);
          	islandCount++;
        }
  	}
  }
  return islandCount;
}

function initTruthMatrix(grid) {
  const truthMatrix = new Array(grid.length);
  truthMatrix.forEach((_, index) => {
    truthMatrix[index] = new Array(grid[index].length).fill(false);
  })
  return truthMatrix;
}

function DFS(grid, truthMatrix, rowIndex, colIndex){
  const horizontalMatrix = [-1, 0, 1, 0];
  const verticalMatrix = [0, 1, 0, -1];
  truthMatrix[rowIndex][colIndex] = true;
  for (let i = 0; i < horizontalMatrix.length; i++) {
    const newRowIndex = rowIndex + horizontalMatrix[i];
    const newColIndex = colIndex + verticalMatrix[i];
    if ( isIsland(grid, newRowIndex, newColIndex) &&
         !isVisited(truthMatrix, newRowIndex, newColIndex) &&
         isSafe(grid, newRowIndex, newColIndex)
       ) {
      DFS(grid, truthMatrix, newRowIndex, newColIndex);
    }
  }
}

function isIsland(grid, newRowIndex, newColIndex){
  return grid[newRowIndex][newColIndex] === 1;
}

function isVisited(truthMatrix, newRowIndex, newColIndex) {
  return truthMatrix[newRowIndex][newColIndex];
}

function isSafe(grid, newRowIndex, newColIndex){
  return newRowIndex < grid.length && newColIndex < grid[newRowIndex].length;
}