function randomElement(a) {
  if(a.length == 0){
    return "";
  }
  return a[Math.floor(Math.random() * a.length)];
}

function excuseGen() {
  return randomElement(who).concat(" ", randomElement(action), " ", randomElement(what), " ", randomElement(when), " ",randomElement(user));
}

function buttonFunc() {
  document.getElementById("excuse").innerHTML = `<h1>${excuseGen(who, action, what, when, user)}</h1>`;
}

function inputArray() {
  user.push(document.getElementById("inputText").value);
  document.getElementById("inputText").value = "";
}

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
let user = [];

document.getElementById("buttonSubmit").addEventListener("click", inputArray);
document.getElementById("buttonGen").addEventListener("click", buttonFunc);

window.onload = function() {
  //write your code here
  let excuse = excuseGen(who, action, what, when);
  console.log(excuse);

  document.getElementById("excuse").innerHTML = `<h1>${excuse}</h1>`;
}




