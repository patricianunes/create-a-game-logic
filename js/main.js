//array with all cards
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

//array with cards that are in play
var cardsInPlay = [];

//function to store the steps to check for a match.
var checkForMatch = function () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      } else {
      alert("Sorry, try again.");
      }
  };
};


//function to store all steps that should happen when the user flips a card.
var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);

  //push the cards that the user flipped to the cardsInPlay array
  cardsInPlay.push(cards[cardId].rank)

  //test to see if the code is run
  console.log("User flipped " + cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)

  //call the function to check for a match
  checkForMatch ();
};

//function new game board
var createBoard = function () {
for (var i = 0; i < cards.length; i++){
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
}
};

//call the function game board
createBoard();  
