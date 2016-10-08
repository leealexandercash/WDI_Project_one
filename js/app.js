$(function () {

  // deckOfCards looks like this
  //   {name: 'two of clubs', value: 2, suit: 1, suitName: clubs, image: '2clubs.png'},

  var cardsSelectedForPlay = [];

  //  console.log(deckOfCards);

  //define a function that selects 9 random cards from the deck.
  var dealCards = function () {
    for (var i=0; i<9; i++) {
      var newCard = ((Math.floor(Math.random()*deckOfCards.length)));
      if ($.inArray(newCard, cardsSelectedForPlay) == -1) {
        cardsSelectedForPlay.push(newCard);
      } else {
        i--;
      }
    }
  };

  // deal the cards to be used in the hand
  dealCards();
  //    console.log(cardsSelectedForPlay);

  var playerCard1 = cardsSelectedForPlay[0];
  var playerCard2 = cardsSelectedForPlay[1];
  var computerCard1 = cardsSelectedForPlay[2];
  var computerCard2 = cardsSelectedForPlay[3];
  var flopCard1 = cardsSelectedForPlay[4];
  var flopCard2 = cardsSelectedForPlay[5];
  var flopCard3 = cardsSelectedForPlay[6];
  var turnCard = cardsSelectedForPlay[7];
  var riverCard = cardsSelectedForPlay[8];
  var player = 'player';

  console.log(deckOfCards[playerCard1].value, deckOfCards[playerCard1].suitName, deckOfCards[playerCard2].value, deckOfCards[playerCard2].suitName, deckOfCards[computerCard1].value, deckOfCards[computerCard1].suitName, deckOfCards[computerCard2].value, deckOfCards[computerCard2].suitName, deckOfCards[flopCard1].value, deckOfCards[flopCard1].suitName, deckOfCards[flopCard2].value, deckOfCards[flopCard2].suitName, deckOfCards[flopCard3].value, deckOfCards[flopCard3].suitName, deckOfCards[turnCard].value, deckOfCards[turnCard].suitName, deckOfCards[riverCard].value, deckOfCards[riverCard].suitName);

// A player's 'hand' will be determined by finding the highest value of possible hands that s/he could have by looking at a combination of cards from the array and scoring it against criteria for each hand type.


// Possible arrays of cards values that we need to consider are:-
var sortedCombinationCardValues1 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues2 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[turnCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues3 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues4 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues5 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard3].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues6 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues7 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues8 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues9 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard2].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues10 = [deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues11 = [deckOfCards[playerCard1].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues12 = [deckOfCards[playerCard1].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues13 = [deckOfCards[playerCard1].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues14 = [deckOfCards[playerCard1].value, deckOfCards[flopCard1].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues15 = [deckOfCards[playerCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues16 = [deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues17 = [deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues18 = [deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues19 = [deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues20 = [deckOfCards[playerCard2].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});
var sortedCombinationCardValues21 = [deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value].sort(function(a, b) {return b-a;});

console.log(sortedCombinationCardValues1, sortedCombinationCardValues2, sortedCombinationCardValues3, sortedCombinationCardValues4, sortedCombinationCardValues5, sortedCombinationCardValues6, sortedCombinationCardValues7, sortedCombinationCardValues8, sortedCombinationCardValues9, sortedCombinationCardValues10, sortedCombinationCardValues11, sortedCombinationCardValues12, sortedCombinationCardValues13, sortedCombinationCardValues14, sortedCombinationCardValues15, sortedCombinationCardValues16, sortedCombinationCardValues17, sortedCombinationCardValues18, sortedCombinationCardValues19, sortedCombinationCardValues20, sortedCombinationCardValues21);


});
