console.log("we learned DOM")
document.body.style.backgroundColor = "lightblue";
document.body.children[0].style.backgroundColor = "lightyellow";
// let cont = document.body.children[2].children;
let cont = document.body.firstElementChild
cont.firstElementChild.style.backgroundColor = "red"
cont.children[1].style.backgroundColor = "yellow"
cont.children[2].style.backgroundColor = "purple"
cont.children[3].style.backgroundColor = "blue"
cont.children[4].style.backgroundColor = "green"