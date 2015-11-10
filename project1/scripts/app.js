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
console.log(cards);
for (var i = 0; i < (boardSize*boardSize); i++) { //make deck
  cards[i] = {};
  console.log(cards);
}
for (var i = 0; i < numberOfPairs; i++) { //assign from array of lifts -- two of each lift.
  cards[i].innerText = liftOptions[i];
  cards[i].identify= i;
  cards[i+numberOfPairs].innerText = liftOptions[i];
  cards[i+numberOfPairs].identify = i;
}
console.log(cards);

//add an ID to each object
//
shuffleCards(cards);//shuffle cards

for (var i in cards) { //make shit show up
  var eachCard = $('<div>');
  var textBox = $('<span>');
  eachCard.addClass('cards');
  textBox.prop('id',i);
  textBox.text(cards[i].innerText);
  eachCard.append(textBox);
  $('.gameboard').append(eachCard);
}

//shuffle function
function shuffleCards(array){
    var counter = array.length, temp, index;
    while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
    }
  return array;
  }

// //begin game: hide all cards
 $('.cards span').hide();

 //store the id of the clicked item
 var clickedItemOne;
 var clickedItemTwo;

//onclick: show contents. animation???


$('.cards').click(function(){
$(this).children().show();

function findIndex(array, key, valuetosearch) {

  for (var i = 0; i < array.length; i++) {

    if (array[i][key] == valuetosearch) {
      return i;
    }
  }
  return null;
  }

//set the first clicked item to the index number
clickedItemOne = findIndex(cards, "innerText", this.innerText);
console.log(clickedItemOne);

clickedItemTwo = findIndex(cards, "innerText", this.innerText);
console.log(clickedItemTwo);

if(clickedItemOne == clickedItemTwo){
  console.log('a match!');

}


  // console.log(cards.indexOf(this.innerText));
  // $('span').show();
});




console.log(cards);



}); //end document ready.
