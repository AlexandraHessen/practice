let arr=[1, 88, 4256, 6]
let maxNum=0
for (let i=0; i<=arr.length; i++){

    if(arr[i]>arr[0]){
        maxNum=arr[i]
    } else{
        maxNum=arr[0]
    }
}
console.log(maxNum)