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
