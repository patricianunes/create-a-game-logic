//array with all cards
var cards = ["queen", "queen", "king", "king"];
//array with cards that are in play
var cardsInPlay = [];

//function to store the steps to check for a match.
var checkForMatch = function () {
  if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    } else {
    console.log("Sorry, try again.");
    }
  }
};

//function to store all steps that should happen when the user flips a card.
var flipCard = function (cardId) {

  //push the cards that the user flipped to the cardsInPlay array
  cardsInPlay.push(cardId)

  //test to see if the code is run
  console.log("User flipped " + cardId)

  //call the function to check for a match
  checkForMatch ();
};

//call the function and give then two values in the array cards  
flipCard (cards[0]);
flipCard (cards[2]);

