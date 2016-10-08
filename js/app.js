$(function () {

  // deckOfCards looks like this
  //   {name: 'two of clubs', value: 2, suit: 1, image: '2clubs.png'},

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

  console.log(deckOfCards[playerCard1].name,', ', deckOfCards[playerCard2].name,', ', deckOfCards[computerCard1].name,', ', deckOfCards[computerCard2].name,', ', deckOfCards[flopCard1].name,', ', deckOfCards[flopCard2].name,', ', deckOfCards[flopCard3].name,', ', deckOfCards[turnCard].name,', ', deckOfCards[riverCard].name);


});
