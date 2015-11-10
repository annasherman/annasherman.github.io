console.log("Linked.");

// function card(id,text) {
//   this.id=id,
//   this.text = text,
//   // this.img = img,
//   this.render = function(){
//     $('.gameboard').append(card);
//   }
// }

//randomize how many different options there are

var liftOptions = ['snatch', 'clean and jerk', 'deadlift', 'bench', 'curl', 'leg press', 'calf raise', 'squat', 'pull up', 'muscle up', 'handstand', 'backbend', 'row', 'lat pulldown', 'decline twist', 'chest fly', 'military press', 'overhead press'];

var boardSize = 6; //rows*columns
console.log(liftOptions.length);

$(document).ready(function(){

var numberOfPairs = boardSize*boardSize/2

//generate cards
var cards = []; //array holding all the cards

for (var i = 0; i < (boardSize*boardSize); i++) { //make deck
  cards[i] = {};
}
for (var i = 0; i < numberOfPairs; i++) { //assign from array of lifts -- two of each lift.
  cards[i] = liftOptions[i];
  cards[i+numberOfPairs] = liftOptions[i];
}

// shuffleCards(cards);//shuffle cards

for (var i in cards) { //make shit show up
  var eachCard = $('<div>')
  eachCard.addClass('cards');
  eachCard.text(cards[i]);
  $('.gameboard').append(eachCard);
}

//shuffle function
// function shuffleCards(array){


//begin game: hide all cards

//onclick: show contents. animation???

console.log(cards);



}); //end document ready.
