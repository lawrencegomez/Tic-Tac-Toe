var game = {
    player1: {
      name: 'Player 1',
      marker: "x",
    },
    player2: {
      name: 'Player 2',
      marker: "o",
    }
}
var
varvar
varvar
varvar
var
var
var
var


var startButton = document.querySelector('#startGame');
var resetButton = document.querySelector('#resetGame');
var resetScores = document.querySelector('#resetScore')
var player1Score = 0
var player2Score = 0
var showPlayer1Score = document.querySelector('.Player1ScoreCount')
var showPlayer2Score = document.querySelector('.Player2ScoreCount')
showPlayer2Score.innerHTML = 0
showPlayer1Score.innerHTML = 0

var currentPlayer = game.player1
showPlayer1Score.className = 'Player1ScoreCount underline'

var switchTurns = function() {
  if(currentPlayer == game.player2) {
    currentPlayer = game.player1
    showPlayer1Score.className = 'Player1ScoreCount underline'
    showPlayer2Score.className = 'Player2ScoreCount'
  } else {
    currentPlayer = game.player2
    showPlayer2Score.className = 'Player2ScoreCount underline'
    showPlayer1Score.className = 'Player1ScoreCount'
  }
}

var winner = ''

var checkWinner = function() {
    if ((squares[0].innerHTML == '<p>x</p>' && squares[1].innerHTML == '<p>x</p>' && squares[2].innerHTML == '<p>x</p>') ||
        (squares[3].innerHTML == '<p>x</p>' && squares[4].innerHTML == '<p>x</p>' && squares[5].innerHTML == '<p>x</p>') ||
        (squares[6].innerHTML == '<p>x</p>' && squares[7].innerHTML == '<p>x</p>' && squares[8].innerHTML == '<p>x</p>') ||
        (squares[0].innerHTML == '<p>x</p>' && squares[4].innerHTML == '<p>x</p>' && squares[8].innerHTML == '<p>x</p>') ||
        (squares[2].innerHTML == '<p>x</p>' && squares[4].innerHTML == '<p>x</p>' && squares[6].innerHTML == '<p>x</p>') ||
        (squares[0].innerHTML == '<p>x</p>' && squares[3].innerHTML == '<p>x</p>' && squares[6].innerHTML == '<p>x</p>') ||
        (squares[1].innerHTML == '<p>x</p>' && squares[4].innerHTML == '<p>x</p>' && squares[7].innerHTML == '<p>x</p>') ||
        (squares[2].innerHTML == '<p>x</p>' && squares[5].innerHTML == '<p>x</p>' && squares[8].innerHTML == '<p>x</p>'))
        {
          winner = game.player1.name
          alert(winner +  ' has won!')
          player1Score += 1
          showPlayer1Score.innerHTML = player1Score
          clearBoard()
        }
   else if
       ((squares[0].innerHTML == '<p>o</p>' && squares[1].innerHTML == '<p>o</p>' && squares[2].innerHTML == '<p>o</p>') ||
        (squares[3].innerHTML == '<p>o</p>' && squares[4].innerHTML == '<p>o</p>' && squares[5].innerHTML == '<p>o</p>') ||
        (squares[6].innerHTML == '<p>o</p>' && squares[7].innerHTML == '<p>o</p>' && squares[8].innerHTML == '<p>o</p>') ||
        (squares[0].innerHTML == '<p>o</p>' && squares[4].innerHTML == '<p>o</p>' && squares[8].innerHTML == '<p>o</p>') ||
        (squares[2].innerHTML == '<p>o</p>' && squares[4].innerHTML == '<p>o</p>' && squares[6].innerHTML == '<p>o</p>') ||
        (squares[0].innerHTML == '<p>o</p>' && squares[3].innerHTML == '<p>o</p>' && squares[6].innerHTML == '<p>o</p>') ||
        (squares[1].innerHTML == '<p>o</p>' && squares[4].innerHTML == '<p>o</p>' && squares[7].innerHTML == '<p>o</p>') ||
        (squares[2].innerHTML == '<p>o</p>' && squares[5].innerHTML == '<p>o</p>' && squares[8].innerHTML == '<p>o</p>'))
        {
          winner = game.player2.name
          alert(winner +  ' has won')
          player2Score += 1
          showPlayer2Score.innerHTML = player2Score
          clearBoard()
        }
        else if
        ((squares[0].innerHTML !== '' && squares[1].innerHTML !== '' && squares[2].innerHTML !== '' &&
          squares[3].innerHTML !== '' && squares[4].innerHTML !== '' && squares[5].innerHTML !== '' &&
          squares[6].innerHTML !== '' && squares[7].innerHTML !== '' && squares[8].innerHTML !== ''))
          {
            alert('Sorry, nobody won this round. Play again!')
            clearBoard()
          }
        }

var squares = document.querySelectorAll('.square');


var start = function(){
for (var i = 0; i < squares.length; i ++) {
  squares[i].addEventListener('click', function() {
    if (this.innerHTML == '') {
        if (currentPlayer == game.player1) {
      this.innerHTML += ('<p>' + game.player1.marker + '</p>')
              this.className = 'square red'
        } else
      this.innerHTML += ('<p>' + game.player2.marker + '</p>')
          switchTurns()
  } else
      alert('Pick an empty space')
  checkWinner()
})
}}

var clearBoard = function() {
  for (var i = 0; i < squares.length; i ++) {
    squares[i].innerHTML = ''
    squares[i].className = 'square'
}}

var resetScore = function() {
  player1Score = 0
  player2Score = 0
  showPlayer1Score.innerHTML = 0
  showPlayer2Score.innerHTML = 0
}

start()
// startButton.addEventListener('click', start)
resetButton.addEventListener('click', clearBoard)
resetScores.addEventListener('click', resetScore)
