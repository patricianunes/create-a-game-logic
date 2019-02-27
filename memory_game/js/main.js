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
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    } else {
    console.log("Sorry, try again.");
    }
};

//function to store all steps that should happen when the user flips a card.
var flipCard = function (cardId) {

  //push the cards that the user flipped to the cardsInPlay array
  cardsInPlay.push(cards[cardId].rank)

  //test to see if the code is run
  console.log("User flipped " + cards[cardId].rank)
  console.log("User flipped " + cards[cardId].cardImage)
  console.log("User flipped " + cards[cardId].suit)

  //call the function to check for a match
  checkForMatch ();
};

//call the function and give then two values in the array cards  
flipCard (0);
flipCard (2);

