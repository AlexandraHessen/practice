var maxPoints = function (points) {
    // y = kx + b
    // k = a / b
    // a = y1 - y2
    // b = x1 - x2

    let counter = new Map();
    //{'12 34.5': new Set()}

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let kb = findLine(points[i], points[j]);
            if (!counter.get(kb)) {
                counter.set(kb, new Set());
            }
            counter.get(kb).add(i)
            counter.get(kb).add(j)
        }
    }

    return getMaxValue(counter)
};


function findLine(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;
    const side1 = y2 - y1;
    const side2 = x2 - x1;
    let k = 0;
    // let b = Infinity;
    if(side1 !== 0){
        k = side1 / side2;
    }
    // if(side2 !== 0){
    //     b = y1 - k * x1;
    // }
    const b = y1 - k * x1;
    return `${k} ${b}`;
}

function getMaxValue(counter) {
    let maxValue = 1;
    console.log(counter)
    for (const value of counter) {
        const setSize = value[1].size;
        if (maxValue < setSize) {
            maxValue = setSize;
        }
    }
    return maxValue
}