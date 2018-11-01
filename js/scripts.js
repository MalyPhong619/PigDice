// business logic
function Players(name, score, dice) {
  this.name = name,
  this.dice = dice,
  this.totalScore = 0;
  this.id = 0
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


Players.prototype.assignId = function() {

}


// // useriterface logic
$(document).ready(function() {
  $(".player-select").submit(function(event) {
    event.preventDefault();
    var player1 = new Players ($("#player1").val());
    var player2 = new Players ($("#player2").val());

    $("#players-display").show();
    $(".player-select").hide();
    $("#player1Name").text(player1.name)
    $("#player2Name").text(player2.name)

  $("#player1-button").click(function() {
    player1.rolling();
  $("#placeholder").text(player1.dice);
  $("#hold-button").click(function() {
    player1.holding();
    $("#player1Score").text(player1.totalScore);
    })
  });

  $("#player2-button").click(function() {
    player2.rolling();
  $("#placeholder").text(player2.dice);
  $("#2hold-button").click(function() {
    player2.holding();
  $("#player2Score").text(player2.totalScore);

      })
    })
  })
});
