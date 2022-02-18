function isPalindrom (str){
    str = str.toLowerCase()
                let strRevers=str.split("").reverse().join("")
                if (str==strRevers){
                    return true
                } else {
                    return false
                }
            }
            console.log(isPolindrom("hjh"))
            console.log(isPolindrom("hjhff"))
    
            function isPalindrom (str){
    str = str.toLowerCase()
                return str === str.split('').reverse().join('')
            }
    