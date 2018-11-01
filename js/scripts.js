// business logic
var player1 = new Players ("Maly");
var player2 = new Players ("Victoria");

function Players(name, score, dice) {
  this.name = name,
  this.dice = dice,
  this.totalScore = 0
}

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

Players.prototype.rolling = function() {
  this.dice = diceRoll();
    if (this.dice === 1) {
    } else if (this.dice >= 2 || this.dice <=6 && this.dice !== 1) {
      this.totalScore += this.dice;
  } return;
}

Players.prototype.holding = function() {
  return ;
}


// // useriterface logic
$(document).ready(function() {


  $("#roll-button").click(function() {
    player1.rolling();
  $("#placeholder").text(player1.dice);
  console.log(player1);

  })
  $("#hold-button").click(function() {
    player1.holding();
    $("#player1-game").text(player1.totalScore);
    console.log(player1);

  })

});
