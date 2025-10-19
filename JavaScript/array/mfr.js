let a = [2,2,2,5,3,3]
// let newa =[]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newa.push(element**2)
// }
// console.log(newa)

    //map

// let newarr= a.map((e)=>{
//     return e**2
// })
// console.log(a)
// console.log(newarr)
// const greaterthan5= (e=>{
//     if (e>5) {
//         return true
//     } else {
//         return false
//     }
// })

    //filter

// console.log(a.filter(greaterthan5))

    //reduce

// const red = ((a,b)=>{
//     return a+b
// })
// console.log(a.reduce(red))

let b=[1,2,3,4,5]
    
    const red = ((a,b)=>{
    return a*b
    })
console.log(b.reduce(red))    

// let newb = []
// for (let index = 0; index < b.length; index++) {
//     const element = b[index];
//     //console.log(newb.reverse())
//     //newb.push(b.reverse())
//     newb.push(element+2)
    
// }

// console.log(newb.reduce(b))
