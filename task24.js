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