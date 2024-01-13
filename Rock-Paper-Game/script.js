let computerChoiceDisplay = document.getElementById("computer-choice")
let userChoiceDisplay = document.getElementById("user-choice")
let resultDisplay = document.getElementById("result")
let userChoice;
const possibleChoices = document.querySelectorAll('button')
let computerChoice;
possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click",(e)=>{
        userChoice =  e.target.id
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult()
    })
    function generateComputerChoice(){
        const randomNumber = Math.floor(Math.random()*possibleChoices.length + 1)
        console.log(randomNumber);
        if(randomNumber === 1){
            computerChoice = 'rock'
        }
        if(randomNumber === 2){
            computerChoice = 'paper'
        }
        if(randomNumber === 3){
            computerChoice = 'scissors'
        }
        computerChoiceDisplay.innerHTML = computerChoice;
    }
})

function getResult(){
    if(computerChoice === userChoice){
        resultDisplay.innerHTML ="It's a tie!"
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        resultDisplay.innerHTML = "you win"
    } 
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        resultDisplay.innerHTML = "you lose"
    } 
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        resultDisplay.innerHTML = "you win"
    } 
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        resultDisplay.innerHTML = "you lose"
    } 
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        resultDisplay.innerHTML = "you win"
    } 
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        resultDisplay.innerHTML = "you lose"
    } 
}