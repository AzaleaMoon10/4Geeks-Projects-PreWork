import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
};

function excuseGen (arr1, arr2, arr3, arr4) {
  return randomElement(who).concat(" ", randomElement(action), " ", randomElement(what), " ", randomElement(when));
}

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

console.log(excuseGen(who, action, what, when));

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excuse = excuseGen(who, action, what, when);
  
  document.getElementById("excuse").innerHTML = `<h1>${excuse}</h1>`;
};

