// business logic
var add = function(a, b) {
  return a + b;
}

var player1 = new Players ("Victoria");
var player2 = new Players ("Maly");

function Players(name, score, dice) {
  this.name = name,
  this.score = [],
  this.dice = dice,
  this.totalScore = 0
}

Players.prototype.diceRoll = function(dice) {
    this.dice = Math.floor(Math.random() * 6) + 1;
    if (this.dice === 1) {
      this.score = [];
    } else if (this.dice >= 2 || this.dice <=6 && this.dice !== 1) {
    this.score.push(this.dice);
  }
  return this.totalScore = this.score.reduce(add, 0);
}

Players.prototype.holding = function() {
  if (this.dice >=2 || this.dice <=6 && this.dice !== 1) {
    this.score.push(this.dice);
  }
  return this.totalScore = this.score.reduce(add, 0);
  this.score = [];
}












//Prints dice roll to the page
function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}
// // useriterface logic
$(document).ready(function(){
  var rollButton = document.getElementById('roll-button');
  var holdButton = document.getElementById('hold-button');


  rollButton.onclick = function() {
    var result = player1.diceRoll();
    printNumber(result);
    console.log(player1);
    };

  holdButton.onclick = function() {
    var result = player1.holding();
    printNumber(result);
  };


});
