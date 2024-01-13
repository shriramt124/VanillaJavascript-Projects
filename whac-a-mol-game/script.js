 


let startgamePage = document.querySelector(".start-game-page");
 let highestScore=0;
let startGame = document.getElementById("start-game")
 let finalAnswer = document.querySelector("#final-answer")
 let levelButtons = document.querySelectorAll(".levels")
  let currentLevel = document.getElementById("current-level");
 levelButtons.forEach( button => {
    button.addEventListener("click",(e)=>{ 
        startgamePage.style.display = "none"
       rungame(e.target.id);
    })
 } )
 
 function rungame(selectedLevel){
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");
let result = 0;
let hitposititon;
let timerId = null;
currentLevel.textContent = selectedLevel;
let intervalTime = 1000;
 if(selectedLevel === 'level-1'){
    currentTime = 60;
 }
  if (selectedLevel ==='level-2'){
    currentTime = 45;
    intervalTime = 800;

 }
 if(selectedLevel === 'level-3'){
    currentTime = 30;
    intervalTime = 600;
 }
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];

  randomSquare.classList.add("mole");
  hitposititon = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitposititon) {
      result++;
      score.textContent = result;
      hitposititon = null;
    }
  });
});
function MoveMole() {
  timerId = setInterval(randomSquare, 1000);
}
MoveMole();
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimeId);
    clearInterval(timerId);
    startgamePage.style.display = "flex"
    finalAnswer.textContent = `you score is : ${result}`;
    startGame.textContent = `Game Over ! play again ?`
     if(result > highestScore){
        highestScore = result;
     }
    document.getElementById("max-score").innerText = highestScore;
     
  }
}
 
let countDownTimeId = setInterval(countDown, intervalTime);
 
 }
 
