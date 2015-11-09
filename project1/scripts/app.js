// function card(id,text) {
//   this.id=id,
//   this.text = text,
//   // this.img = img,
//   this.render = function(){
//     $('.gameboard').append(card);
//   }
// }

//randomize how many different options there are
var options = boardSize*boardSize/2
var liftOptions = ['snatch', 'clean and jerk', 'deadlift', 'bench', 'curl', 'leg press', 'calf raise', 'squat', 'pull up', 'muscle up', 'handstand', 'backbend', 'row', 'lat pulldown', 'decline twist', 'chest fly', 'military press', 'overhead press'];

console.log(liftOptions.length);

var aCard = $('<div>');
aCard.prop('class', 'gamecard');
$('.gameboard').append(aCard);


//generate cards
var boardSize = 6;
var cards = {};
// for (var i = 0; i < (boardSize*boardSize); i++) {
//   cards[i] = new card();
//   $('#gameboard').append(cards[i]);
// }
