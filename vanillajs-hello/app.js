function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function excuseGen() {
  if(user.length != 0) {
    return [randomElement(who), randomElement(action), randomElement(what), randomElement(when), randomElement(user)];
  }
  return [randomElement(who), randomElement(action), randomElement(what), randomElement(when)];
}

function colorGen() {
  let colorPool = [...colorArray];

  if(currentColors.length != 0) {
    for(let i = 0; i < currentExcuse.length; i++){
      let aux = currentColors[i];
      colorPool.splice(colorPool.indexOf(aux),1);
    }
  }

  for(let i = 0; i < 5; i++){
    let aux = randomElement(colorPool);
    currentColors[i] = aux;
    colorPool.splice(colorPool.indexOf(aux),1);
  }
}

function printExcuse(excuse) {
  if(excuse.length < 5){
    return "<span id='color0'>" + excuse[0] + " </span>" + "<span id='color1'>" + excuse[1] + " </span>"+  "<span id='color2'>" + excuse[2] + " </span>" + "<span id='color3'>" + excuse[3] + " </span>";
  }
  return "<span id='color0'>" + excuse[0] + " </span>" + "<span id='color1'>" + excuse[1] + " </span>"+  "<span id='color2'>" + excuse[2] + " </span>" + "<span id='color3'>" + excuse[3] + " </span>" + "<span id='color4'>" + excuse[4] + " </span>";
}

function printColors() {
  console.log(currentExcuse);
  for(let i = 0; i < currentExcuse.length; i++){
    document.getElementById(`color${i}`).style.color = currentColors[i];
  }
}

function buttonExcuse() {
  currentExcuse = excuseGen();
  document.getElementById("excuse").innerHTML = `<h1>${printExcuse(currentExcuse)}</h1>`;
  printColors(currentColors);
}

function inputArray() {
  user.push(document.getElementById("inputText").value);
  document.getElementById("inputText").value = "";
}

function buttonShuffle() {
  shuffleCurrentColors();
  printColors();
}

function buttonNewColors() {
  colorGen();
  printColors();
}

function buttonNewColNewEx() {
  colorGen();
  buttonExcuse()
}

function shuffleCurrentColors() {
  let currentIndex = currentExcuse.length;

  while(currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [currentColors[currentIndex], currentColors[randomIndex]] = [currentColors[randomIndex], currentColors[currentIndex]];
  }
}

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
    
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let user = [];
let currentExcuse = excuseGen();
let currentColors = [];
colorGen();

document.getElementById("buttonGen").addEventListener("click", buttonExcuse);
document.getElementById("buttonSubmit").addEventListener("click", inputArray);
document.getElementById("buttonShuffle").addEventListener("click", buttonShuffle);
document.getElementById("buttonNewColors").addEventListener("click", buttonNewColors);
document.getElementById("buttonNewColNewEx").addEventListener("click", buttonNewColNewEx);


window.onload = function() {
  //write your code here
  console.log(currentExcuse);

  buttonExcuse();
}




