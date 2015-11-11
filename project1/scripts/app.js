console.log("Linked.");

//randomize how many different options there are

var liftOptions = ['snatch', 'clean and jerk', 'deadlift', 'bench', 'curl', 'leg press', 'calf raise', 'squat', 'pull up', 'muscle up', 'handstand', 'backbend', 'row', 'lat pulldown', 'decline twist', 'chest fly', 'military press', 'overhead press'];

var boardSize = 6; //rows*columns
var numberOfPairs = boardSize*boardSize/2
console.log(liftOptions.length);

var clickedItemArray=[];
var spanIDArray = [];
var canClick = true;

function clearClicks(array1, array2){
  array1.pop();
  array2.pop();
  canClick = true;
}

//stop click function after 2 inputs & restart
function clearCards(){
  spanIDArray.push("#" + spanID);
  if (clickedItemArray.length == 2){//if there are two cards in the array
    canClick = false;
    if (clickedItemArray[0]===clickedItemArray[1]){ //if they match
      //make the cards disappear
      console.log("A match.");
      // console.log(spanIDArray[0]);
      for (var i = 0; i < spanIDArray.length; i++) { //fade out each array item div
        $(spanIDArray[i]).parent().delay(1000).queue(function(){
            $(this).css('opacity', '0.0');
            $(this).dequeue();
          });

      }
    } else {
      console.log("try again");
      $('.cards span').delay(1800).fadeOut('fast');

      //flip the cards back over
    }
    $('.cards').delay(2000).queue(function(){
      clearClicks(spanIDArray,clickedItemArray);
      $(this).dequeue();
    });
    // spanIDArray=[];
    // clickedItemArray=[];
    //set the tracking arrays back to empty for next turn
  }
}

$(document).ready(function(){

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
//shuffleCards(cards);//shuffle cards

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

//onclick: show contents. animation???

function findIndex(array, key, valuetosearch) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] == valuetosearch) {
      return i;
    }
  }
  return null;
};

//store the id of the clicked item



$('.cards').click(function(){

    if (canClick == true) {
      $(this).children().show();
      //get span elements id and store in an array to clear the parent div later.
      spanID = $(this).children('span').prop('id');
      clickedItem = findIndex(cards, "innerText", this.innerText);
      if (clickedItemArray.length < 2){
        clickedItemArray.push(clickedItem);
        console.log(clickedItemArray);
      };
      clearCards(clickedItemArray,spanID);
  };
});





//updating selectors function:
// function updateStatusInElement(domElement, statusString) {
//   domElement.innerHTML = statusString;
// }
//
// function updateStatusInElement(domElement, statusString) {
//   $(domElement).html(statusString);
// }



//STILL NEED TO INCORPORATE PLAYERS
//need to keep score
//think of putting in a timer? recording total clicks and returning accuracy?

//namespacing -- put your variables inside of objects.
//helps with organization

//if you keep updating the same elements, make a function to do it for you. subsequent updates will be easier as well.

}); //end document ready.
