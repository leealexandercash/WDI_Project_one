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
  //console.log(cardsSelectedForPlay);

  var playerCard1 = cardsSelectedForPlay[0];
  var playerCard2 = cardsSelectedForPlay[1];
  var computerCard1 = cardsSelectedForPlay[2];
  var computerCard2 = cardsSelectedForPlay[3];
  var flopCard1 = cardsSelectedForPlay[4];
  var flopCard2 = cardsSelectedForPlay[5];
  var flopCard3 = cardsSelectedForPlay[6];
  var turnCard = cardsSelectedForPlay[7];
  var riverCard = cardsSelectedForPlay[8];

  var flushHands = [];
  var fullHouseHands = [];
  var fourOfAKindHands = [];
  var straightHands = [];
  var threeOfAKindHands = [];
  var twoPairHands = [];
  var pairedHands = [];
  var highestCard = "";

  // This logs the full set of cards dealt but isn't required once the UI contains the cards.
  // console.log(deckOfCards[playerCard1].value, deckOfCards[playerCard1].suitName, deckOfCards[playerCard2].value, deckOfCards[playerCard2].suitName, deckOfCards[computerCard1].value, deckOfCards[computerCard1].suitName, deckOfCards[computerCard2].value, deckOfCards[computerCard2].suitName, deckOfCards[flopCard1].value, deckOfCards[flopCard1].suitName, deckOfCards[flopCard2].value, deckOfCards[flopCard2].suitName, deckOfCards[flopCard3].value, deckOfCards[flopCard3].suitName, deckOfCards[turnCard].value, deckOfCards[turnCard].suitName, deckOfCards[riverCard].value, deckOfCards[riverCard].suitName);

  //The image address of each card is a value on the deckOfCards object.

  // This format is used for the card images - deckOfCards[playerCard1].image
  //Update the UI with the all the cards in view initially so that we can test more easily whilst developing the game
  $('#userCardOne').append('<img height=100% src="images/'+deckOfCards[playerCard1].image+'" />');
  $('#userCardTwo').append('<img height=100% src="images/'+deckOfCards[playerCard2].image+'" />');
  $('#computerCardOne').append('<img height=100% src="images/'+deckOfCards[computerCard1].image+'" />');
  $('#computerCardTwo').append('<img height=100% src="images/'+deckOfCards[computerCard2].image+'" />');
  $('#flopCard1').append('<img height=100px src="images/'+deckOfCards[flopCard1].image+'" />');
  $('#flopCard2').append('<img height=100px src="images/'+deckOfCards[flopCard2].image+'" />');
  $('#flopCard3').append('<img height=100px src="images/'+deckOfCards[flopCard3].image+'" />');
  $('#turnCard').append('<img height=100px src="images/'+deckOfCards[turnCard].image+'" />');
  $('#riverCard').append('<img height=100px src="images/'+deckOfCards[riverCard].image+'" />');


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

  //This is a useful log which shows all the card values in all the combinaiton arrays
  //console.log(sortedCombinationCardValues1, sortedCombinationCardValues2, sortedCombinationCardValues3, sortedCombinationCardValues4, sortedCombinationCardValues5, sortedCombinationCardValues6, sortedCombinationCardValues7, sortedCombinationCardValues8, sortedCombinationCardValues9, sortedCombinationCardValues10, sortedCombinationCardValues11, sortedCombinationCardValues12, sortedCombinationCardValues13, sortedCombinationCardValues14, sortedCombinationCardValues15, sortedCombinationCardValues16, sortedCombinationCardValues17, sortedCombinationCardValues18, sortedCombinationCardValues19, sortedCombinationCardValues20, sortedCombinationCardValues21);

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

  //This is a useful log which shows all the card suits in all the combinaiton arrays
  //console.log(sortedCombinationCardSuits1, sortedCombinationCardSuits2, sortedCombinationCardSuits3, sortedCombinationCardSuits4, sortedCombinationCardSuits5, sortedCombinationCardSuits6, sortedCombinationCardSuits7, sortedCombinationCardSuits8, sortedCombinationCardSuits9, sortedCombinationCardSuits10, sortedCombinationCardSuits11, sortedCombinationCardSuits12, sortedCombinationCardSuits13, sortedCombinationCardSuits14, sortedCombinationCardSuits15, sortedCombinationCardSuits16, sortedCombinationCardSuits17, sortedCombinationCardSuits18, sortedCombinationCardSuits19, sortedCombinationCardSuits20, sortedCombinationCardSuits21);

  //Use these two arrays for testing... they overwrite the arrays above...
  // sortedCombinationCardValues1 = [9,5,5,5,3];
  //  sortedCombinationCardValues2 = [5,4,3,2,1];
  // sortedCombinationCardSuits1 = [1,1,1,1,1];
  // sortedCombinationCardSuits2 = [2,2,2,2,2];

  //This is a variable containing the arrays of all the sorted card values (above) for all permutations for the player
  var allSortedCombinationCardValues = [sortedCombinationCardValues1, sortedCombinationCardValues2, sortedCombinationCardValues3, sortedCombinationCardValues4, sortedCombinationCardValues5, sortedCombinationCardValues6, sortedCombinationCardValues7, sortedCombinationCardValues8, sortedCombinationCardValues9, sortedCombinationCardValues10, sortedCombinationCardValues11, sortedCombinationCardValues12, sortedCombinationCardValues13, sortedCombinationCardValues14, sortedCombinationCardValues15, sortedCombinationCardValues16, sortedCombinationCardValues17, sortedCombinationCardValues18, sortedCombinationCardValues19, sortedCombinationCardValues20, sortedCombinationCardValues21];

  //This is a variable containing the arrays of all the sorted suit values (above) for all permutations for the player
  var allSortedCombinationCardSuits = [sortedCombinationCardSuits1, sortedCombinationCardSuits2, sortedCombinationCardSuits3, sortedCombinationCardSuits4, sortedCombinationCardSuits5, sortedCombinationCardSuits6, sortedCombinationCardSuits7, sortedCombinationCardSuits8, sortedCombinationCardSuits9, sortedCombinationCardSuits10, sortedCombinationCardSuits11, sortedCombinationCardSuits12, sortedCombinationCardSuits13, sortedCombinationCardSuits14, sortedCombinationCardSuits15, sortedCombinationCardSuits16, sortedCombinationCardSuits17, sortedCombinationCardSuits18, sortedCombinationCardSuits19, sortedCombinationCardSuits20, sortedCombinationCardSuits21];

  //We can now write functions that will check for the various hands and run the combinations through them to check if they are true.

  //Function to see if a hand is Four of a Kind
  var fourOfAKindChecker = function(array) {
    if ((array[0] === array[3]) || (array[1] === array[4])) {
      return true;
    }
  };

  //Function to see if a hand is a full house. Uses sortedCombinationCardValues arrays and compares the first three cards and the last two cards (and vice versa) to see if the cards within those ranges are the same.
  var fullHouseChecker = function(array) {
    if ((array[0] === array[2] && array[3] === array[4]) || (array[0] === array[1] && array[2] === array[4])) {
      return true;
    }
  };

  //Function to see if a hand is a flush (uses sortedCombinationCardSuits arrays)
  var flushChecker = function(array) {
    if (array[0] === array[4]) {
      return true;
    }
  };

  //Function to see if a hand is a straight (uses sortedCombinationCardValues) and simply checks to see if the numbers within the array are sequentially decreasing
  var straightChecker = function(array) {
    if ((array[1] === array[0]-1) && (array[2] === (array[1]-1)) && (array[3] === (array[2]-1)) && (array[4] === array[3]-1)) {
      return true;
    }
  };

  // Function to see if a hand is Three Of A Kind. Uses sortedCombinationCardValues and looks to see if there are three equal values within the array which will always be consecutive as they are sorted by order.
  var threeOfAKindChecker = function(array) {
    if (array[0] === array[2] || array[1] === array[3] || array[2] === array[4]) {
      return true;
    }
  };

  //Function to see if a hand is Two Pairs. Uses sortedCombinationCardValues to see if there are two lots of two cards within the array that have the same value (i.e. two values next to each other are equal, as they are already sorted by value).
  var twoPairChecker = function(array) {
    if ((array[0] === array[1]) && (array[2] === array[3]) || (array[0] === array[1]) && (array[3] === array[4]) || (array[1] === array[2]) && (array[3] === array[4])) {
      return true;
    }
  };

  //Function to see if a hand contains any pairs. Uses sortedCombinationCardValues to see if there are two cards within the array that have the same value.
  var pairChecker = function(array) {
    if (array[0] === array[1] || array[1] === array[2] || array[2] === array[3] || array[3] === array[4]) {
      return true;
    }
  };

  //highCardChecker. Checks for the highest value card in the array of all cards.
  var highCardChecker = function() {
    highestCard = Math.max(deckOfCards[playerCard1].value, deckOfCards[playerCard2].value, deckOfCards[flopCard1].value, deckOfCards[flopCard2].value, deckOfCards[flopCard3].value, deckOfCards[turnCard].value, deckOfCards[riverCard].value);
  };

  //Function to see if there are Flush arrays when called with the allSortedCombinationCardSuits array. Uses the flushChecker function.
  var isFlush = function(array) {
    for (var i=0;i<array.length;i++) {
      if(flushChecker(array[i])) {
        flushHands.push(array[i]);
        console.log(array[i]+' is a flush');
      }
    }
  };
  isFlush(allSortedCombinationCardSuits);
  console.log('There are '+flushHands.length+' lush arrays');
  console.log(flushHands);

  //Function to see if there are Full House arrays when called with the allSortedCombinationCardValues array. Uses the fullHouseChecker function.
  var isFullHouse = function(array) {
    for (var i=0;i<array.length;i++) {
      if(fullHouseChecker(array[i])) {
        fullHouseHands.push(array[i]);
        // console.log(array[i]+' is a Full House');
      }
    }
  };
  isFullHouse(allSortedCombinationCardValues);
  console.log('There are '+fullHouseHands.length+' Full House arrays');
  console.log(fullHouseHands);

  //Function to see if there are Four Of A Kind arrays when called with the allSortedCombinationCardValues array. Uses the fourOfAKindChecker function.
  var isFourOfAKind = function(array) {
    for (var i=0;i<array.length;i++) {
      if(fourOfAKindChecker(array[i])) {
        fourOfAKindHands.push(array[i]);
        // console.log(array[i]+' is a Four Of A Kind');
      }
    }
  };
  isFourOfAKind(allSortedCombinationCardValues);
  console.log('There are '+fourOfAKindHands.length+' Four Of A Kind arrays');
  console.log(fourOfAKindHands);

  //Function to see if there are Straight arrays when called with the allSortedCombinationCardValues array. Uses the straightChecker function.
  var isStraight = function(array) {
    for (var i=0;i<array.length;i++) {
      if(straightChecker(array[i])) {
        straightHands.push(array[i]);
        // console.log(array[i]+' is a Four Of A Kind');
      }
    }
  };
  isStraight(allSortedCombinationCardValues);
  console.log('There are '+straightHands.length+' Straight arrays');
  console.log(straightHands);

  //Function to see if there are Three Of A Kind arrays when called with the allSortedCombinationCardValues array. Uses the threeOfAKindChecker function.
  var isThreeOfAKind = function(array) {
    for (var i=0;i<array.length;i++) {
      if(threeOfAKindChecker(array[i])) {
        threeOfAKindHands.push(array[i]);
        // console.log(array[i]+' is a Three Of A Kind');
      }
    }
  };
  isThreeOfAKind(allSortedCombinationCardValues);
  console.log('There are '+threeOfAKindHands.length+' Three Of A Kind arrays');
  console.log(threeOfAKindHands);

  //Function to see if there are Two Pairs in an array when called with the allSortedCombinationCardValues array. Uses the twoPairChecker function.
  var istwoPair = function(array) {
    for (var i=0;i<array.length;i++) {
      if(twoPairChecker(array[i])) {
        twoPairHands.push(array[i]);
        // console.log(array[i]+' is Two Pairs');
      }
    }
  };
  istwoPair(allSortedCombinationCardValues);
  console.log('There are '+twoPairHands.length+' Two Pair arrays');
  console.log(twoPairHands);

  //Function to see if there is a Pair in an array when called with the allSortedCombinationCardValues array. Uses the pairChecker function.
  var isPair = function(array) {
    for (var i=0;i<array.length;i++) {
      if(pairChecker(array[i])) {
        pairedHands.push(array[i]);
        // console.log(array[i]+' is Two Pairs');
      }
    }
  };
  isPair(allSortedCombinationCardValues);
  console.log('There are '+pairedHands.length+' Paired arrays');
  console.log(pairedHands);

  //Function to see what the highest card is within an array. Called with the allSortedCombinationCardValues array. Uses the highCardChecker function
  highCardChecker();
  console.log('Highest Card is: '+highestCard);
  // console.log('High Card is 'Math.max(playerCard1));
});
