import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excuse = randomElement(who).concat(" ", randomElement(action), " ", randomElement(what), " ", randomElement(when));
  
  document.getElementById("excuse").innerHTML = `<h1>${excuse}</h1>`;
};
