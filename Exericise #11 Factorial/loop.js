
    //Using for loop
let a = Number(prompt("Enter the number"));
let b =1;
for (let i = 1; i <= a; i++) {
    b *= i;
    
}
console.log(b)

        //using reduce with given array

let e = [1,2,3,4,5,6]
    const red = ((c,d)=>{
        return c*d
    })
console.log(e.reduce(red))

    //using reduce and array with function
let d = 5;
function fact(number) {
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a,b)=> a*b ) 
    return c
}
console.log(fact(d))  
        // for loop with function
function Fact(number) {
    let fec = 1;
    for (let index = 1; index <= number; index++) {
        fec = fec * index
        
        
    }  
    return fec  
}
console.log(Fact(d))