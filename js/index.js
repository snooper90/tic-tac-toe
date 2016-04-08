var grid = document.getElementById("board");
var option_overlay = document.querySelector('.option_overlay');
close_option_btn = document.getElementById('close_option_btn');
open_option_btn = document.getElementById('open_option_btn');

close_option_btn.addEventListener('click', function(){
  option_overlay.classList.add('hide');
});

open_option_btn.addEventListener('click', function(){
  option_overlay.classList.remove('hide');
});

grid.addEventListener("click", function(){

});
// code above line just for temp option menue usage


//research the best way to set a turn variable

var playersTurn = true;

// selecting each td and adding an even listener
$('tbody').click(function(e){
  if(e.target.nodeName == 'TD'){
    if(playersTurn){
      $(e.target).text('X');
      playersTurn = !playersTurn;
      //test using data attribute instead of inner HTML

      //check for winner
    }else{
      $(e.target).text('O');
      playersTurn = !playersTurn;
      //check for winner
    };
    console.log('click')
    checkForWinner();
  }
});

function checkForWinner(){
//collect bord data
var arrBoard =$('td').text().split('');

//check the rows
checkWinRow(arrBoard);
checkWinCol(arrBoard);
//check diag win

}

function checkWinRow(arrBoard){
  for(var i = 0; i < arrBoard.length ; i += 3){
    if(arrBoard[i] === arrBoard[i + 1] && arrBoard[i + 1] === arrBoard[i + 2]){
      alert('working across');
      return true;
    };
  };
  return false
};
function checkWinCol(arrBoard){
  for(var i = 0; i < 4 ; i++ ){
    if(arrBoard[i] === arrBoard[i + 3] && arrBoard[i + 3] === arrBoard[i + 6]){
      alert('working down')
      return true
    };
  };
  return false
};


// $('td').data('value') => 'x'
