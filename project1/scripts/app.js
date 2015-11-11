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
// shuffleCards(cards);//shuffle cards

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


// if(clickedItemOne == clickedItemTwo){
//   console.log('a match!');
// }

// function playATurn(){
//   $('.cards').click(function(){
//   $(this).children().show();
//   clickedItemOne = findIndex(cards, "innerText", this.innerText);
//   console.log(clickedItemOne);
//   });
//   };

//store the id of the clicked item
var clickedItemArray=[];
var spanIDArray = [];

$('.cards').click(function(){
    $(this).children().show();
    //get span elements id and store in an array to clear the parent div later.
    spanID = $(this).children('span').prop('id');
    clickedItem = findIndex(cards, "innerText", this.innerText);
    recordClick(clickedItem,spanID);
});

function recordClick(){
  clickedItemArray.push(clickedItem);
  spanIDArray.push("#" + spanID);
  console.log(spanIDArray);
  //console.log(clickedItemArray);
  if (clickedItemArray.length == 2){
    if (clickedItemArray[0]===clickedItemArray[1]){
      console.log("I am the best");
      console.log(spanIDArray[0]);
      $(spanIDArray[0])
        .parent()
        .delay(1000)
        .queue(function(){
          $(this).css('opacity', '0.0');
          $(this).dequeue();
        });

    //   $('.pressimage img')
    // .delay(1000)
    // .queue(function(){
    //     $(this).css({'z-index','1'});
    //     $(this).dequeue();
    // });

      $(spanIDArray[1])
        .parent()
        .delay(1000)
        .queue(function(){
          $(this).css('opacity', '0.0');
          $(this).dequeue();
        });
      spanIDArray=[];
      clickedItemArray=[];
      //make the cards disappear
    } else {
      console.log("try again");
      clickedItemArray = [];
      spanIDArray=[];
      $('.cards span').delay(1800).hide(0);
      //flip the cards back over
    }
  }
}

//stop click function after 2 inputs & restart





}); //end document ready.
