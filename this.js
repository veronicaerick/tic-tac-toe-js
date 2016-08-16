
$(document).ready(function(){
  gameStart();
});
var board;
var currentPlayer;
var gameOver;
// create a list of winning combos
var wins = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]]


// let players know who's turn it is
function renderText(){
  $('.infoText').text('Go: ' + currentPlayer)
}

// create board
function renderBoard (){
  for (var i = 0;i<board.length;i++){
    $('.'+i).html(board[i]);
  }
}

// set up the players, assign a current player- check to see if change results in game ending
// if not, change the player, rerenderboard and update the info text 
function setBox(box){
  if (gameOver) return;
  board[box] = currentPlayer;
  checkState();
  if (gameOver) return;
  changePlayer();
  renderBoard();
  renderText();
}

// new game starts with empty boxes. start player at X, G.O. is initially set to false
function gameStart(){
  board = [" "," "," "," "," "," "," "," "," "];
  currentPlayer ="X";
  gameOver = false;
  renderBoard();
  renderText();
}

//  swap players
function changePlayer(){
  if (currentPlayer == "O")
    currentPlayer = "X";
  else
    currentPlayer = "O";
}

// check if the current combination of turns results in a win and relay info to player
function checkState(){
  $.each(wins, function(index,value){
   if (board[wins[index][0]] == board[wins[index][1]] 
    && board[wins[index][0]] == board[wins[index][2]]
    && board[wins[index[0]]] == board[wins[index][3]]
    && board[wins[index[0]]] == board[wins[index][4]]
    && board[wins[index[0]]] == board[wins[index][5]]
    && board[wins[index[0]]] == board[wins[index][6]]
    && board[wins[index[0]]] == board[wins[index][7]]
    && board[wins[index][0]] != " "){
      gameOver = true;
      $('.infoText').html(currentPlayer + ' wins');
      renderBoard();
   }
  });
}