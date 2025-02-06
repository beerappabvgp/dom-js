// selectors
// const h1 = document.getElementById("h1");
// console.log(h1);
// console.log(h1.textContent);

// const containers = document.getElementsByClassName("container");

// console.log(containers);


// const allDivs = document.getElementsByTagName("div");
// console.log(allDivs);


// const h2 = document.querySelector("#h1");
// console.log(h2);

// const h2 = document.querySelectorAll(".container");
// console.log(h2);/


// const h1 = document.getElementById("h1");
// const p = document.getElementsByTagName("p");
// console.log(h1);
// // setTimeout(() => {
// //     h1.innerHTML = "Welcome all 👋";
// // }, 4000);
// console.log(p);
// setTimeout(() => {
//     p[0].innerHTML = "<b>Welcome</b> all 👋 ";
// }, 4000);


// const img = document.getElementsByTagName("img");
// // console.log("test..")
// console.log("image: ", img);
// setTimeout(() => {
//     console.log(img);
//     img[0].setAttribute("src", "./dream.jpg");
//     img[0].setAttribute("alt", "dream");
// }, 3000);

// const body = document.getElementsByTagName("body");

// console.log(body);

// setTimeout(() => {
//     body[0].style.backgroundColor = "blue";
// }, 3000);

// const para = document.getElementById("para");

// setTimeout(() => {
//     para.style.border = "3px solid black";
//     para.style.borderRadius = "20px";
//     para.style.padding = "20px";
//     para.style.color = "white";
// }, 3000)



// const h1 = document.createElement("h1");
// h1.innerText = "Hi there!!";

// console.log(h1);

// document.body.appendChild(h1);

// const section = document.createElement("section");
// const div = document.createElement("div");
// const p = document.createElement("p");

// p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga, rem totam, nulla perspiciatis corporis repellat nesciunt eveniet quibusdam possimus dolorum aliquam vitae mollitia sit quisquam quae ipsa sapiente delectus.";

// div.appendChild(p);
// section.appendChild(div);
// document.body.appendChild(section);

// h1.remove();


const btn = document.getElementById("btn");

// console.log(btn);

// const clickHandler = (event) => {
//     alert("You have clicked on the button ... ");
//     console.log(event);
// };

// btn.addEventListener("click", clickHandler);

// setTimeout(() => {
//     btn.removeEventListener("click", clickHandler);
// }, 3000);



// const h1 = document.getElementById("h1");

// console.log(h1.parentNode);
// console.log(h1.childNodes);
// console.log(h1.nextElementSibling);
// console.log(h1.nextElementSibling);

// const section = document.getElementById("section");
// console.log(section);

// console.log(section.childNodes);


// const p = document.getElementById("para");

// const handleClick = () => {
//     p.classList.add("class2");
// }

// btn.addEventListener("click", handleClick);


// event bubbling ... 

const div = document.getElementById("div");
console.log(div);

div.addEventListener("click", (event) => {
    console.log("div1 has been clicked ... ");
});


document.body.addEventListener("click", (event) => {
    console.log("body has been clicked ... ");
});


const section = document.getElementById("section");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");


const sectionHandler = () => {
    console.log("section has been clicked ... ");
}

const div1Handler = () => {
    console.log("Div1 has been clicked .... ");
}
const div2Handler = () => {
    console.log("Div2 has been clicked .... ");
}
const div3Handler = () => {
    console.log("Div3 has been clicked .... ");
}

section.addEventListener("click", sectionHandler);
div1.addEventListener("click", div1Handler);
div2.addEventListener("click", div2Handler);
div3.addEventListener("click", div3Handler);

