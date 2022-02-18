let arr = [1, 2, 3, 4, 5, 6, 16]
        let newArr=arr.filter((num)=>num%2==0).map((num)=>num/2)

        function func(res, num) {
            if (num % 2 === 0) {
                res.push(num/2)
            } 
                return res
        }
        console.log(arr.reduce(func, []))
