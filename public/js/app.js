// Data and Variable Declarations
var timer;
var minutesLeft = 25;
var secondsLeft = 0;
var isOnBreak = false;
var numberOfBreaks = 0;
// Getting references the DOM
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var startButton = document.querySelector('#start');
// Initialization Code
  //EventListeners
  startButton.addEventListener('click', start);
// Function Definitions
function start(){
  if(!timer){
      timer = setInterval(tick, 1000);
  }
}
function tick(){
  console.log('tick');
}
function render(){}
