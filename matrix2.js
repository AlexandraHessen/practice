let grid1 = [
    [1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1],
]

let obj = {}

let checkCoord = (x, y, grid) => {
    if (grid[x][y] === 1) {
        if (Object.keys(obj).length) {
            let ifAHalfOfIcland = -1

            Object.keys(obj).forEach(key => {
                obj[key].forEach(el => {
                    if (el.x - 1 === x && el.y === y) {
                        ifAHalfOfIcland = key
                    }

                    if (el.x + 1 === x && el.y === y) {
                        ifAHalfOfIcland = key
                    }

                    if (el.x === x && el.y + 1 === y) {
                        ifAHalfOfIcland = key
                    }

                    if (el.x === x && el.y - 1 === y) {
                        ifAHalfOfIcland = key
                    }
                })                    
            })

            if (ifAHalfOfIcland > -1) {
                obj[ifAHalfOfIcland].push({x, y})
            } else {
                obj[Object.keys(obj).length] = [{x, y}]
            }

        } else {
            obj[0] = [{x, y}]
        }
    }
}

let numIslands = function(grid) {
    grid.forEach((item, x) => {
        item.forEach((row, y) => {
            checkCoord(x, y, grid)
        })
    });

    return Object.keys(obj).length
}

console.log(numIslands(grid1))