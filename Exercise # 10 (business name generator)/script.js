let a = {
    1:"Crazy" , 
    2:"Amazing" , 
    3: "Fire"};
let b = {1:"Engine" , 2:"Food" , 3:"Garments"};
let c = {1:"Bros" , 2:"Limited" , 3:"Hub"};

let r1= Math.random();
if (r1 < 0.33) {
    console.log(a[1]);
}
else if(r1 <0.66) {
    console.log(a[2]);
} else {
    console.log(a[3]);
}

let r2= Math.random();
if (r2<0.33) {
    console.log(b[1]);
}
else if (r2 <0.66) {
    console.log(b[2]);
} 
else {
    console.log(b[3]);
}

let r3= Math.random();
if (r3<0.33) {
    console.log(c[1]);
}
else if (r3 <0.66) {
    console.log(c[2]);
} 
else {
    console.log(c[3]);
}
