var targetNumber = randomNumber();

$(document).ready(readyNow);

function readyNow() {
    console.log('js sourced, ready to go');
    $('#submitButton').on('click', checkAnswer);
    $('#gameBox').on('click', '#newGameButton', resetGame);
}

function randomNumber() {
    return Math.round(Math.random() * 9 + 1);
}

function checkAnswer() {
    var $inputValue = $('#inputField').val();
    if ($inputValue > targetNumber && $inputValue < 10) {
        $('#answerField').children().html('<p>lower</p>');
        $('#gameBox').css('background-color', 'yellow');
    } else if ($inputValue < targetNumber && $inputValue > 0) {
        $('#answerField').children().html('<p>higher</p>');
        $('#gameBox').css('background-color', 'orange');
    } else if ($inputValue == targetNumber) {
        $('#answerField').children().html('<p>correct</p>');
        $('#gameBox').css('background-color', 'green');
        endGame();
    } else {
        $('#answerField').children().html('<p></p>');
        $('#gameBox').css('background-color', 'grey');
    }
}

function endGame() {
    targetNumber = randomNumber();
    $('#submitButton').html('<button id="newGameButton">New Game</button>');
    $('#inputField').val('');
}

function resetGame() {
    $('#gameBox').css('background-color', 'grey');
    $('#newGameButton').html('<button id="submitButton">Submit</button>');
    $('#inputField').val('');
}