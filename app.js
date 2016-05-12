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

var $startButton = $('#startGame');
var $resetButton = $('#resetGame');
var $resetScores = $('#resetScore')
var $player1Score = 0
var $player2Score = 0
var $showPlayer1Score = $('.Player1ScoreCount')
var $showPlayer2Score = $('.Player2ScoreCount')
$showPlayer2Score.html(0)
$showPlayer1Score.html(0)
var squares = $('.square');

var currentPlayer = game.player1
$showPlayer1Score.hasClass('Player1ScoreCount underline')

var switchTurns = function() {
  if(currentPlayer == game.player2) {
    currentPlayer = game.player1
    $showPlayer1Score.hasClass('Player1ScoreCount underline')
    $showPlayer2Score.hasClass('Player2ScoreCount')
  } else {
    currentPlayer = game.player2
    $showPlayer2Score.hasClass('Player2ScoreCount underline')
    $showPlayer1Score.hasClass('Player1ScoreCount')
  }
}

var winner = ''

var checkWinner = function() {
    if (
        ($(squares[0]).html() == '<p>x</p>' && $(squares[1]).html() == '<p>x</p>' && $(squares[2]).html() == '<p>x</p>') ||
        ($(squares[3]).html() == '<p>x</p>' && $(squares[4]).html() == '<p>x</p>' && $(squares[5]).html() == '<p>x</p>') ||
        ($(squares[6]).html() == '<p>x</p>' && $(squares[7]).html() == '<p>x</p>' && $(squares[8]).html() == '<p>x</p>') ||
        ($(squares[0]).html() == '<p>x</p>' && $(squares[4]).html() == '<p>x</p>' && $(squares[8]).html() == '<p>x</p>') ||
        ($(squares[2]).html() == '<p>x</p>' && $(squares[4]).html() == '<p>x</p>' && $(squares[6]).html() == '<p>x</p>') ||
        ($(squares[0]).html() == '<p>x</p>' && $(squares[3]).html() == '<p>x</p>' && $(squares[6]).html() == '<p>x</p>') ||
        ($(squares[1]).html() == '<p>x</p>' && $(squares[4]).html() == '<p>x</p>' && $(squares[7]).html() == '<p>x</p>') ||
        ($(squares[2]).html() == '<p>x</p>' && $(squares[5]).html() == '<p>x</p>' && $(squares[8]).html() == '<p>x</p>'))
        {
          winner = game.player1.name
          alert(winner +  ' has won!')
          $player1Score += 1
          $showPlayer1Score.html($player1Score)
          clearBoard()
        }
   else if
       (($(squares[0]).html() == '<p>o</p>' && $(squares[1]).html() == '<p>o</p>' && $(squares[2]).html() == '<p>o</p>') ||
        ($(squares[3]).html() == '<p>o</p>' && $(squares[4]).html() == '<p>o</p>' && $(squares[5]).html() == '<p>o</p>') ||
        ($(squares[6]).html() == '<p>o</p>' && $(squares[7]).html() == '<p>o</p>' && $(squares[8]).html() == '<p>o</p>') ||
        ($(squares[0]).html() == '<p>o</p>' && $(squares[4]).html() == '<p>o</p>' && $(squares[8]).html() == '<p>o</p>') ||
        ($(squares[2]).html() == '<p>o</p>' && $(squares[4]).html() == '<p>o</p>' && $(squares[6]).html() == '<p>o</p>') ||
        ($(squares[0]).html() == '<p>o</p>' && $(squares[3]).html() == '<p>o</p>' && $(squares[6]).html() == '<p>o</p>') ||
        ($(squares[1]).html() == '<p>o</p>' && $(squares[4]).html() == '<p>o</p>' && $(squares[7]).html() == '<p>o</p>') ||
        ($(squares[2]).html() == '<p>o</p>' && $(squares[5]).html() == '<p>o</p>' && $(squares[8]).html() == '<p>o</p>'))
        {
          winner = game.player2.name
          alert(winner +  ' has won')
          $player2Score += 1
          $showPlayer2Score.html($player2Score)
          clearBoard()
        }
        else if
        (($(squares[0]).html() !== '' && $(squares[1]).html() !== '' && $(squares[2]).html() !== '' &&
          $(squares[3]).html() !== '' && $(squares[4]).html() !== '' && $(squares[5]).html() !== '' &&
          $(squares[6]).html() !== '' && $(squares[7]).html() !== '' && $(squares[8]).html() !== ''))
          {
            alert('Sorry, nobody won this round. Play again!')
            clearBoard()
          }
        }




var start = function(){
  squares.on('click', function() {
    if ($(this).html() == '') {
        if (currentPlayer == game.player1) {
      $(this).html('<p>' + game.player1.marker + '</p>')
              $(this).hasClass('square red')
        } else
      $(this).html('<p>' + game.player2.marker + '</p>')
          switchTurns()
  } else
      alert('Pick an empty space')
  checkWinner()
})
}

var clearBoard = function() {
    squares.html('')
    squares.hasClass('square')
}

var resetScore = function() {
  $player1Score = 0
  $player2Score = 0
  $showPlayer1Score.html(0)
  $showPlayer2Score.html(0)
}

start()
$resetButton.on('click', clearBoard)
$resetScores.on('click', resetScore)
