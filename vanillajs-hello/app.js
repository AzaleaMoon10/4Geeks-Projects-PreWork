function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function excuseGen() {
  return randomElement(who).concat(" ", randomElement(action), " ", randomElement(what), " ", randomElement(when));
}

function buttonFunc() {
  document.getElementById("excuse").innerHTML = `<h1>${excuseGen(who, action, what, when)}</h1>`;
}

const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  let excuse = excuseGen(who, action, what, when);
  console.log(excuse);

  document.getElementById("excuse").innerHTML = `<h1>${excuse}</h1>`;
}



