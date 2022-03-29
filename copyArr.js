let a=[1, 2, 3]
let b=[...a]
b=[a[0], a[1], a[2]]
let c=[...a, 6]

let a={a:1, b:2}
let c={...a}
c={a:a.a, b:a.b}