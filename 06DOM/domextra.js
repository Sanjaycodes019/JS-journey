const heading = document.getElementById("h1");
const h4 = document.getElementsByClassName("h4");
const tag = document.querySelector(".h4");

const first = document.querySelector("p");
const all = document.querySelectorAll("p");


let h4 = document.querySelector("h4");

h4.innerText = h4.innerText + ", Studying in JS!" //concatenate the string


let index = 1;
const box = document.querySelectorAll(".box");
for( div of box){
    div.innerText = `new unique value ${index}`;
    index++;
}