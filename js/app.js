$(function () {

  // deckOfCards looks like this and is stored as an object on the window.
  //   {name: 'two of clubs', value: 2, suit: 1, suitName: clubs, image: '2clubs.png'},

  // let's create a variable to hold all the cards that will be used in the hand.
  var cardsSelectedForPlay = [];

  //define a function that selects 9 random UNIQUE cards from the deck.
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

  console.log(deckOfCards[playerCard1].value, deckOfCards[playerCard1].suitName, deckOfCards[playerCard2].value, deckOfCards[playerCard2].suitName, deckOfCards[computerCard1].value, deckOfCards[computerCard1].suitName, deckOfCards[computerCard2].value, deckOfCards[computerCard2].suitName, deckOfCards[flopCard1].value, deckOfCards[flopCard1].suitName, deckOfCards[flopCard2].value, deckOfCards[flopCard2].suitName, deckOfCards[flopCard3].value, deckOfCards[flopCard3].suitName, deckOfCards[turnCard].value, deckOfCards[turnCard].suitName, deckOfCards[riverCard].value, deckOfCards[riverCard].suitName);

  //The image address of each card is a value on the deckOfCards object.

  console.log(deckOfCards[playerCard1].image);

  //Update the UI with the all the cards in view initially so that we can test more easily whilst developing the game
  $('#userCardOne').prepend('<img height=100% src="images/'+deckOfCards[playerCard1].image+'" />');
  $('#userCardTwo').prepend('<img height=100% src="images/'+deckOfCards[playerCard2].image+'" />');


  // A player's 'hand' will be determined by finding the highest value of possible hands that s/he could have by looking at a combination of cards from the array and scoring it against criteria for each hand type.
  // Possible arrays of cards values that we need to consider are sorted by descending value to make their analysis easier:-
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

  // Similarly, we need to know the suited values of the cards so that we can check for a flush, a stright flush and a Royal Flush:-
  var sortedCombinationCardSuits1 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits2 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits3 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits4 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits5 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits6 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits7 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits8 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits9 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits10 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits11 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits12 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits13 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits14 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits15 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits16 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits17 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits18 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits19 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits20 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardSuits21 = [deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});

  // console.log(sortedCombinationCardSuits1, sortedCombinationCardSuits2, sortedCombinationCardSuits3, sortedCombinationCardSuits4, sortedCombinationCardSuits5, sortedCombinationCardSuits6, sortedCombinationCardSuits7, sortedCombinationCardSuits8, sortedCombinationCardSuits9, sortedCombinationCardSuits10, sortedCombinationCardSuits11, sortedCombinationCardSuits12, sortedCombinationCardSuits13, sortedCombinationCardSuits14, sortedCombinationCardSuits15, sortedCombinationCardSuits16, sortedCombinationCardSuits17, sortedCombinationCardSuits18, sortedCombinationCardSuits19, sortedCombinationCardSuits20, sortedCombinationCardSuits21);

  //We can now write functions that will check for the various hands and run the combinations through them to check if they are true.

  //Function to see if a hand is Four of a Kind
  var fourOfAKindChecker = function(array) {
    if ((array[0] === array[3]) || (array[1] === array[4])) {
      return true;
    } else {
      return false;
    }
  };

  //Function to see if a hand is a full house. Uses sortedCombinationCardValues arrays and compares the first three cards and the last two cards (and vice versa) to see if the cards within those ranges are the same.
  var fullHouseChecker = function(array) {
    if (((array[0] === array[2]) && (array[3] === array[4])) || ((array[0] === array[1]) && (array[2] === array[4]))) {
      return true;
    } else {
      return false;
    }
  };

  //Function to see if a hand is a flush (uses sortedCombinationCardSuits arrays)
  var flushChecker = function(array) {
    if (array[0] === array[4]) {
      return true;
    } else {
      return false;
    }
  };

  //Function to see if a hand is a straight (uses sortedCombinationCardValues) and simply checks to see if the numbers within the array are sequentially decreasing
  var straightChecker = function(array) {
    if ((array[1] === (array[0]-1)) && (array[2] === (array[1]-1)) && (array[3] === (array[2]-1)) && (array[4] === (array[3]-1))) {
      return true;
    } else {
      return false;
    }
  };

  //Function to see if a hand is a Straight Flush
  var straightFlushChecker = function() {
    if (isFlush && isStraight) {
      return true;
    } else {
      return false;
    }
  };

  //Variable which stores true or false for a Royal Flush
  var royalFlushChecker = function(array) {
    if (isStraightFlush && array[0]===14) {
        return true;
    } else {
      return false;
    }
  };

  //Use these two arrays for testing
//  sortedCombinationCardValues1 = [5,4,3,2,1];
//  sortedCombinationCardSuits1 = [1,1,1,1,2];

  var isFlush = (flushChecker(sortedCombinationCardSuits1) || flushChecker(sortedCombinationCardSuits2) || flushChecker(sortedCombinationCardSuits3) || flushChecker(sortedCombinationCardSuits4) || flushChecker(sortedCombinationCardSuits5) || flushChecker(sortedCombinationCardSuits6) || flushChecker(sortedCombinationCardSuits7) || flushChecker(sortedCombinationCardSuits8) || flushChecker(sortedCombinationCardSuits9) || flushChecker(sortedCombinationCardSuits10) || flushChecker(sortedCombinationCardSuits11) || flushChecker(sortedCombinationCardSuits12) || flushChecker(sortedCombinationCardSuits13) || flushChecker(sortedCombinationCardSuits14) || flushChecker(sortedCombinationCardSuits15) || flushChecker(sortedCombinationCardSuits16) || flushChecker(sortedCombinationCardSuits17) || flushChecker(sortedCombinationCardSuits18) || flushChecker(sortedCombinationCardSuits19) || flushChecker(sortedCombinationCardSuits20) || flushChecker(sortedCombinationCardSuits21));

  console.log('isFlush=: '+isFlush);

  var isFullHouse = (fullHouseChecker(sortedCombinationCardValues1) || fullHouseChecker(sortedCombinationCardValues2) || fullHouseChecker(sortedCombinationCardValues3) || fullHouseChecker(sortedCombinationCardValues4) || fullHouseChecker(sortedCombinationCardValues5) || fullHouseChecker(sortedCombinationCardValues6) || fullHouseChecker(sortedCombinationCardValues7) || fullHouseChecker(sortedCombinationCardValues8) || fullHouseChecker(sortedCombinationCardValues9) || fullHouseChecker(sortedCombinationCardValues10) || fullHouseChecker(sortedCombinationCardValues11) || fullHouseChecker(sortedCombinationCardValues12) || fullHouseChecker(sortedCombinationCardValues13) || fullHouseChecker(sortedCombinationCardValues14) || fullHouseChecker(sortedCombinationCardValues15) || fullHouseChecker(sortedCombinationCardValues16) || fullHouseChecker(sortedCombinationCardValues17) || fullHouseChecker(sortedCombinationCardValues18) || fullHouseChecker(sortedCombinationCardValues19) || fullHouseChecker(sortedCombinationCardValues20) || fullHouseChecker(sortedCombinationCardValues21));

  console.log('isFullHouse =: '+isFullHouse);

  var isFourOfAKind = (fourOfAKindChecker(sortedCombinationCardValues1) || fourOfAKindChecker(sortedCombinationCardValues2) || fourOfAKindChecker(sortedCombinationCardValues3) || fourOfAKindChecker(sortedCombinationCardValues4) || fourOfAKindChecker(sortedCombinationCardValues5) || fourOfAKindChecker(sortedCombinationCardValues6) || fourOfAKindChecker(sortedCombinationCardValues7) || fourOfAKindChecker(sortedCombinationCardValues8) || fourOfAKindChecker(sortedCombinationCardValues9) || fourOfAKindChecker(sortedCombinationCardValues10) || fourOfAKindChecker(sortedCombinationCardValues11) || fourOfAKindChecker(sortedCombinationCardValues12) || fourOfAKindChecker(sortedCombinationCardValues13) || fourOfAKindChecker(sortedCombinationCardValues14) || fourOfAKindChecker(sortedCombinationCardValues15) || fourOfAKindChecker(sortedCombinationCardValues16) || fourOfAKindChecker(sortedCombinationCardValues17) || fourOfAKindChecker(sortedCombinationCardValues18) || fourOfAKindChecker(sortedCombinationCardValues19) || fourOfAKindChecker(sortedCombinationCardValues20) || fourOfAKindChecker(sortedCombinationCardValues21));

  console.log('isFourOfAKind =: '+isFourOfAKind);

  var isStraight = (straightChecker(sortedCombinationCardValues1) || straightChecker(sortedCombinationCardValues2) || straightChecker(sortedCombinationCardValues3) || straightChecker(sortedCombinationCardValues4) || straightChecker(sortedCombinationCardValues5) || straightChecker(sortedCombinationCardValues6) || straightChecker(sortedCombinationCardValues7) || straightChecker(sortedCombinationCardValues8) || straightChecker(sortedCombinationCardValues9) || straightChecker(sortedCombinationCardValues10) || straightChecker(sortedCombinationCardValues11) || straightChecker(sortedCombinationCardValues12) || straightChecker(sortedCombinationCardValues13) || straightChecker(sortedCombinationCardValues14) || straightChecker(sortedCombinationCardValues15) || straightChecker(sortedCombinationCardValues16) || straightChecker(sortedCombinationCardValues17) || straightChecker(sortedCombinationCardValues18) || straightChecker(sortedCombinationCardValues19) || straightChecker(sortedCombinationCardValues20) || straightChecker(sortedCombinationCardValues21));

  console.log('isStraight =: '+isStraight);

  var isStraightFlush = (straightFlushChecker(sortedCombinationCardValues1) || straightFlushChecker(sortedCombinationCardValues2) || straightFlushChecker(sortedCombinationCardValues3) || straightFlushChecker(sortedCombinationCardValues4) || straightFlushChecker(sortedCombinationCardValues5) || straightFlushChecker(sortedCombinationCardValues6) || straightFlushChecker(sortedCombinationCardValues7) || straightFlushChecker(sortedCombinationCardValues8) || straightFlushChecker(sortedCombinationCardValues9) || straightFlushChecker(sortedCombinationCardValues10) || straightFlushChecker(sortedCombinationCardValues11) || straightFlushChecker(sortedCombinationCardValues12) || straightFlushChecker(sortedCombinationCardValues13) || straightFlushChecker(sortedCombinationCardValues14) || straightFlushChecker(sortedCombinationCardValues15) || straightFlushChecker(sortedCombinationCardValues16) || straightFlushChecker(sortedCombinationCardValues17) || straightFlushChecker(sortedCombinationCardValues18) || straightFlushChecker(sortedCombinationCardValues19) || straightFlushChecker(sortedCombinationCardValues20) || straightFlushChecker(sortedCombinationCardValues21));

console.log('isStraightFlush =: '+isStraightFlush);

});
