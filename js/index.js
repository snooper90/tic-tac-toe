var players = {'player1':{'name': 'player1', 'symbol': 'X', 'wins': 0, 'img': '<img src="images/moveOne.png" alt="X">'},
               'player2':{'name': 'player2', 'symbol': 'O', 'wins': 0, 'img': '<img src="images/moveTwo.png" alt="X">'},
               'playersTurn':{'start': true, 'current': true }};

// selecting each td and adding an even listener
$().ready(function(){
  updateScore();
  clearBoard();
  $('td').click(function(e){
    var $cell = $(e.currentTarget);
    var $cellValue = $(e.currentTarget).data('value');
    if($cellValue === null){
      if(players.playersTurn.current){
        updateBoard($cell , players.player1.symbol, players.player1.img);
      }else{
        updateBoard($cell , players.player2.symbol, players.player2.img);
      };
      players.playersTurn.current = !players.playersTurn.current;
      if(checkForDraw()){
        clearBoard();
        onWin();
      };
      if(checkForWinner()){
        var winner = checkForWinner();
        clearBoard();
        updateScore(winner);
        onWin(winner);
      };
    };
  });
});

function checkForWinner(){
  //collect bord data
  var arrBoard =getBoardData();
  // return the winner if there is one
  if(checkWinRow(arrBoard)){
    return checkWinRow(arrBoard);
  }else if(checkWinCol(arrBoard)){
    return checkWinCol(arrBoard);
  }else if(checkWinDiag(arrBoard)){
    return checkWinDiag(arrBoard);
  };
};

function checkWinRow(arrBoard){
  for(var i = 0; i < 7 ; i += 3){
    if(arrBoard[i] === arrBoard[i + 1] && arrBoard[i + 1] === arrBoard[i + 2]){
      if(arrBoard[i] !== null){
        return arrBoard[i];
      };
    };
  };
  return false;
};

function checkWinCol(arrBoard){
  for(var i = 0; i < 3 ; i++ ){
    if(arrBoard[i] === arrBoard[i + 3] && arrBoard[i + 3] === arrBoard[i + 6]){
      if(arrBoard[i] !== null){
        return arrBoard[i];
      };
    };
  };
  return false;
};

function checkWinDiag(arrBoard){
  var arrBoard = getBoardData();
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

function updateBoard($cell, player, img){
  $cell.html(img);
  $cell.data('value', player);
};

function updateScore(winner){
  //update counters
  if(winner === "X"){
    players.player1.wins += 1;
  }else if(winner === "O"){
    players.player2.wins += 1;
  }
  //update values
  $('#p1Wins').text(players.player1.wins);
  $('#p2Wins').text(players.player2.wins);
};

function clearBoard(){
  //replace all squares with null values and text
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

function onWin(winner){
  var $winMessage = $('#showOnWin');
//set the winning message to show the winner
  if(winner === "X"){
    $winMessage.text(players.player1.name + " wins!!! ");
  }else if(winner === "O"){
    $winMessage.text(players.player2.name + " wins!!! ");
  }else{
    $winMessage.text("Tie!");
  };
  showWinner();
};

function showWinner(){
  var $winOverlay = $('#winOverlay');
  //display winner
  $winOverlay.show(500);
  //hide display after
  $winOverlay.delay(1000).hide(1000);
};
