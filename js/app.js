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

  // Possible arrays of card suits that we also need to consider are:-

  var sortedCombinationCardsuits1 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits2 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits3 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits4 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits5 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits6 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits7 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits8 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits9 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits10 = [deckOfCards[playerCard1].suit, deckOfCards[playerCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits11 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits12 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits13 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits14 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits15 = [deckOfCards[playerCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits16 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits17 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits18 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits19 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard1].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits20 = [deckOfCards[playerCard2].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});
  var sortedCombinationCardsuits21 = [deckOfCards[flopCard1].suit, deckOfCards[flopCard2].suit, deckOfCards[flopCard3].suit, deckOfCards[turnCard].suit, deckOfCards[riverCard].suit].sort(function(a, b) {return b-a;});

  console.log(sortedCombinationCardsuits1, sortedCombinationCardsuits2, sortedCombinationCardsuits3, sortedCombinationCardsuits4, sortedCombinationCardsuits5, sortedCombinationCardsuits6, sortedCombinationCardsuits7, sortedCombinationCardsuits8, sortedCombinationCardsuits9, sortedCombinationCardsuits10, sortedCombinationCardsuits11, sortedCombinationCardsuits12, sortedCombinationCardsuits13, sortedCombinationCardsuits14, sortedCombinationCardsuits15, sortedCombinationCardsuits16, sortedCombinationCardsuits17, sortedCombinationCardsuits18, sortedCombinationCardsuits19, sortedCombinationCardsuits20, sortedCombinationCardsuits21);

  function flushChecker(array) {
    if (array[0] === array[4]) {
      return true;
    } else {
      return false;
    }
  }

  var isFlush = (flushChecker(sortedCombinationCardsuits1) || flushChecker(sortedCombinationCardsuits2) || flushChecker(sortedCombinationCardsuits3) || flushChecker(sortedCombinationCardsuits4) || flushChecker(sortedCombinationCardsuits5) || flushChecker(sortedCombinationCardsuits6) || flushChecker(sortedCombinationCardsuits7) || flushChecker(sortedCombinationCardsuits8) || flushChecker(sortedCombinationCardsuits9) || flushChecker(sortedCombinationCardsuits10) || flushChecker(sortedCombinationCardsuits11) || flushChecker(sortedCombinationCardsuits12) || flushChecker(sortedCombinationCardsuits13) || flushChecker(sortedCombinationCardsuits14) || flushChecker(sortedCombinationCardsuits15) || flushChecker(sortedCombinationCardsuits16) || flushChecker(sortedCombinationCardsuits17) || flushChecker(sortedCombinationCardsuits18) || flushChecker(sortedCombinationCardsuits19) || flushChecker(sortedCombinationCardsuits20) || flushChecker(sortedCombinationCardsuits21));

  console.log(isFlush);

});
