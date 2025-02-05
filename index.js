// selectors
const h1 = document.getElementById("h1");
console.log(h1);
console.log(h1.textContent);

const containers = document.getElementsByClassName("container");

console.log(containers);


const allDivs = document.getElementsByTagName("div");
console.log(allDivs);


// const h2 = document.querySelector("h2");
// console.log(h2);

const h2 = document.querySelectorAll(".container");
console.log(h2);