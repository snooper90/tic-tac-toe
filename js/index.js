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

// code above line just for temp option menue usage


//research the best way to set a turn variable

var playersTurn = true;

// selecting each td and adding an even listener
$('td').click(function(e){
  var $cell = $(e.currentTarget)

    if(playersTurn){
      $(e.target).text('X');
      playersTurn = !playersTurn;
      //test using data attribute instead of inner HTML
      console.log(e.attributes)     ;
      $cell.data('value', "o")

      //check for winner
    }else{
      $(e.target).text('O');
      playersTurn = !playersTurn;
      $cell.data('value', "x")
    };
    console.log('click')
    checkForWinner();
});

function checkForWinner(){
//collect bord data
var arrBoard =getBoardData();
//check the rows
checkWinRow(arrBoard);
checkWinCol(arrBoard);
//check diag win

}

function checkWinRow(arrBoard){
  for(var i = 0; i < arrBoard.length ; i += 3){
    if(arrBoard[i] === arrBoard[i + 1] && arrBoard[i + 1] === arrBoard[i + 2]){
      if(arrBoard[i] !==   undefined){
        alert('working across');
        return true;
      };
    };
  };
  return false
};
function checkWinCol(arrBoard){
  for(var i = 0; i < 3 ; i++ ){
    if(arrBoard[i] === arrBoard[i + 3] && arrBoard[i + 3] === arrBoard[i + 6]){
      if(arrBoard[i] !== undefined){
        alert('working down')
        return true
      };
    };
  };
  return false
};

function getBoardData(){
  var arrBoard = [];
  for(var i = 0 ; i < 9 ; i++){
    arrBoard.push($($('td')[i]).data('value'));
  };
  return arrBoard;
}

// $('td#cell-0')[i].data('value') => 'x'
