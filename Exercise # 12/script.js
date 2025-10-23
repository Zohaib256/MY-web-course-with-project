console.log("Exercise # 12")
document.title ="Exercise # 12"
        //combination of different colors

document.querySelectorAll(".box").forEach(e =>{
    r=Math.floor(Math.random()*256);  
    g=Math.floor(Math.random()*256);  
    b=Math.floor(Math.random()*256); 
    e.style.backgroundColor =`rgb(${r},${g},${b})`; 
})
document.querySelectorAll(".box").forEach(e =>{
    r=Math.floor(Math.random()*256);  
    g=Math.floor(Math.random()*256);  
    b=Math.floor(Math.random()*256); 
    e.style.color =`rgb(${r},${g},${b})`; 
})

        //using the defined color array
// let color = ["Green","blue","purple","yellow","brown","pink","red"];
// let box = document.querySelectorAll(".box");
// let size=color.length;
// box.forEach(element => {
//     let r = Math.floor(Math.random()*size)  
//     element.style.backgroundColor=color[r];  
// });
// box.forEach(element => {
//     let r = Math.floor(Math.random()*size)  
//     element.style.color=color[r];  
// });
