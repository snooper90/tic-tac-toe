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
      //check for winner
    }else{
      $(e.target).text('O');
      playersTurn = !playersTurn;
      //check for winner
    };
    console.log('click')
  }
});

function checkForWinner(){

}
