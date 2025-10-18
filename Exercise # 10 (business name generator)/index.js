// Adjectives:
// Crazy 
// Amazing
// Fire 

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub
let a = {
    1:"Crazy" , 
    2:"Amazing" , 
    3: "Fire"};
let b = {1:"Engine" , 2:"Food" , 3:"Garments"};
let c = {1:"Bros" , 2:"Limited" , 3:"Hub"};

function name() {
    let rand = Math.random();
    if (rand < 0.33) {
        return 1;
    }
    if (rand < 0.66) {
        return 2;
    } else {
        return 3;
    }
    
}
console.log(a[name()] , b[name()], c[name()])

