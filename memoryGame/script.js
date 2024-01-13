window.addEventListener("DOMContentLoaded",()=>{



const cardArray = [
  {
    name: "fries",
    img: "./img1.png",
  },
  {
    name: "lua",
    img: "./img2.jpg",
  },
  {
    name: "javascript",
    img: "./img3.svg",
  },
  {
    name: "css",
    img: "./img4.png",
  },
  {
    name: "php",
    img: "./img5.svg",
  },
  {
    name: "c++",
    img: "./img6.svg",
  },

  {
    name: "fries",
    img: "./img1.png",
  },
  {
    name: "lua",
    img: "./img2.jpg",
  },
  {
    name: "javascript",
    img: "./img3.svg",
  },
  {
    name: "css",
    img: "./img4.png",
  },
  {
    name: "php",
    img: "./img5.svg",
  },
  {
    name: "c++",
    img: "./img6.svg",
  },
];

//console.log(cardArray);

const gridDisplay = document.querySelector("#grid"); //method to sort the array in exactly same order we have written
let cardChosen = [];
let choosenCardIds = [];
let cardsWon = [];
let resultDisplay = document.querySelector('#result')
//  console.log(gridDisplay);

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./empty.jpg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}



function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = choosenCardIds[0];
  const optionTwoId = choosenCardIds[1];
   if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute("src", "./blur.jpg");
    cards[optionTwoId].setAttribute("src", "./blur.jpg");
    alert('you have clicked on same card');
   }
  else if (cardChosen[0] === cardChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "./blur.jpg");
    cards[optionTwoId].setAttribute("src", "./blur.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);


  }else{
    cards[optionOneId].setAttribute('src','./empty.jpg')
    cards[optionTwoId].setAttribute('src','./empty.jpg')
    alert("sorry try again");
  }

  
  cardChosen = [];
  choosenCardIds = [];
resultDisplay.textContent = cardsWon.length;
  if(cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = "congratulations you won the game";
  }
}


function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  choosenCardIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
 
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}


createBoard();
});