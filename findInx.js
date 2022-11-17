// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [2,7,11,15]
// const target = 9
// [0,1]

// const nums = [3,2,4]
// const target = 6
//[1,2]

const nums = [3, 3]
const target = 6
// [0,1]

function findInx(arr, sum) {
    let prevNum = 0
    let sumInx = []
    arr.forEach((numb, inx) => {
        if (prevNum + numb === target) {
            sumInx.push(inx - 1)
            sumInx.push(inx)
        }

        prevNum = numb

    })

    return sumInx
}

console.log(findInx(nums, target))