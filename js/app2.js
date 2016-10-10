$(function () {

  ////////////////////////////GLOBAL SCOPE VARIABLES///////////////////////////////////////////////////
  var computerStack = 5000;
  var humanStack = 5000;
  var handTurn = 0;

  //The array of cards that will be used for the game - 9 cards.
  var cardsSelectedForPlay = [];


  //This function deals 9 unique cards into the cardsSelectedForPlay array
    var dealCards = function () {
    for (var i=9; i<1; i++) {
      var newCard = ((Math.floor(Math.random()*deckOfCards.length)));
      if ($.inArray(newCard, cardsSelectedForPlay) == -1) {
        cardsSelectedForPlay.push(newCard);
      } else {
        i--;
      }
    }
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////GAME STARTS HERE/////////////////////////////////////////////

  //Let's set up the board ready for a game.
  var gameInitialise = function () {

    //Initial welcome in the status area.
    $('#statusArea').append('* Welcome to Heads Up Poker!<br>* I hope you enjoy playing it<br>* Click Start Game to play');

    $('#computerStackArea').append('$'+computerStack);
    $('#humanStackArea').append('$'+humanStack);
    $('#potArea').append('$ Pot Empty');

    $('#humanCard1').append('<img height=100% src="images/backOfCard.jpg" />');
    $('#humanCard2').append('<img height=100% src="images/backOfCard.jpg" />');
    $('#computerCard1').append('<img height=100% src="images/backOfCard.jpg" />');
    $('#computerCard2').append('<img height=100% src="images/backOfCard.jpg" />');

    $('#flopCard1').append('<img height=100px src="images/backOfCard.jpg" />');
    $('#flopCard2').append('<img height=100px src="images/backOfCard.jpg" />');
    $('#flopCard3').append('<img height=100px src="images/backOfCard.jpg" />');
    $('#turnCard').append('<img height=100px src="images/backOfCard.jpg" />');
    $('#riverCard').append('<img height=100px src="images/backOfCard.jpg" />');

    $('#nextHandButton').on('click', function () {
      startGame();
    });
  };
  var startGame = function () {

    dealCards();
    console.log(cardsSelectedForPlay);








  };

  gameInitialise();

});
