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

//var playersTurn = true;
var players = {'player1':{'name': 'player1', 'symbol': 'X', 'wins': 0},
               'player2':{'name': 'player2', 'symbol': 'O', 'wins': 0},
               'playersTurn':{'start': true, 'current': true }};

// selecting each td and adding an even listener
$('td').click(function(e){
  var $cell = $(e.currentTarget)
  var $cellValue = $(e.currentTarget).data('value');
  if($cellValue === null){
    if(players.playersTurn.current){
      updateBoard($cell , players.player1.symbol);
    }else{
      updateBoard($cell , players.player2.symbol);
    };
    players.playersTurn.current = !players.playersTurn.current;
    if(checkForDraw()){
      clearBoard();
    };
    if(checkForWinner()){
      var winner = checkForWinner();
      clearBoard();
      updateScore(winner);
    };
  }
});

function checkForWinner(){
  //collect bord data
  var arrBoard =getBoardData();

  if(checkWinRow(arrBoard)){
    return checkWinRow(arrBoard);
  }else if(checkWinCol(arrBoard)){
    return checkWinCol(arrBoard);
  }else if(checkWinDiag(arrBoard)){
    return checkWinDiag(arrBoard);
  }
};

function checkWinRow(arrBoard){
  for(var i = 0; i < arrBoard.length ; i += 3){
    if(arrBoard[i] === arrBoard[i + 1] && arrBoard[i + 1] === arrBoard[i + 2]){
      if(arrBoard[i] !== null){
        return arrBoard[i];
      };
    };
  };
  return false
};
function checkWinCol(arrBoard){
  for(var i = 0; i < 3 ; i++ ){
    if(arrBoard[i] === arrBoard[i + 3] && arrBoard[i + 3] === arrBoard[i + 6]){
      if(arrBoard[i] !== null){
        return arrBoard[i]
      };
    };
  };
  return false
};
function checkWinDiag(arrBoard){
  var arrBoard =getBoardData();
  if(arrBoard[0] === arrBoard[4] && arrBoard[4] === arrBoard[8]){
    if(arrBoard[0] !== null){
      return arrBoard[0];
    };
  };
  if(arrBoard[2] === arrBoard[4] && arrBoard[4]=== arrBoard[6]){
    if(arrBoard[2] !== null){
     return arrBoard[2];
    };
  };
  return false;
};

function getBoardData(){
  var arrBoard = [];
  for(var i = 0 ; i < 9 ; i++){
    arrBoard.push($($('td')[i]).data('value'));
  };
  return arrBoard;
};

function updateBoard($cell, player){
  $cell.text(player);
  $cell.data('value', player);
};
function updateScore(winner){
  if(winner === "X"){
    players.player1.wins += 1;
  }else if(winner === "O"){
    players.player2.wins += 1;
  }
  //update values
  $('#p1Wins').text(players.player1.wins);
  $('#p2Wins').text(players.player2.wins);
}
function clearBoard(){
  $('td').data('value', null);
  $('td').text('');
  players.playersTurn.current = players.playersTurn.start;
}
function checkForDraw(){
  var arrBoard = getBoardData();
  // if not empty spaces return true
  if(arrBoard.indexOf(null) === -1){
    return true;
  }
  return false;
}

$().ready(function(){
  updateScore();
  clearBoard();
});
