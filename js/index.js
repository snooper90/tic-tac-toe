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
  var $cellValue = $(e.currentTarget).data('value');
  if($cellValue === undefined){
    if(playersTurn){
      $cell.text('X');
      $cell.data('value', "x");
    }else{
      $cell.text('O');
      $cell.data('value', "o")
    };
    playersTurn = !playersTurn;
    checkForWinner();
  }
});

function checkForWinner(){
//collect bord data
var arrBoard =getBoardData();
//check the rows
var row  =checkWinRow(arrBoard);
var col  =checkWinCol(arrBoard);
var diag =checkWinDiag(arrBoard);

if(row || col || diag){
  alert('you win');
};


}

function checkWinRow(arrBoard){
  for(var i = 0; i < arrBoard.length ; i += 3){
    if(arrBoard[i] === arrBoard[i + 1] && arrBoard[i + 1] === arrBoard[i + 2]){
      if(arrBoard[i] !==   undefined){
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
        return true
      };
    };
  };
  return false
};
function checkWinDiag(arrBoard){
  var arrBoard =getBoardData();
  if(arrBoard[0] === arrBoard[4] && arrBoard[4] === arrBoard[8]){
    if(arrBoard[0] !== undefined){
      return true;
    };
  }
  if(arrBoard[2] === arrBoard[4] && arrBoard[4]=== arrBoard[6]){
    if(arrBoard[2] !== undefined){
     return true;
    }
  }
  return false;
}

function getBoardData(){
  var arrBoard = [];
  for(var i = 0 ; i < 9 ; i++){
    arrBoard.push($($('td')[i]).data('value'));
  };
  return arrBoard;
}

