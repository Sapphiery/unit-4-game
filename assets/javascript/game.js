$(document).ready( function() {
    var targetScore, currentScore;

    var newGame = function() {
        for (var i = 1; i <= 4; i++) {
            var randoNumero = Math.floor((Math.random() * 12) + 1);
            var thisButton = '#gem' + i;
            $(thisButton).attr('gem-value', randoNumero);
        }
        targetScore = Math.floor(Math.random() * 102) + 19;
        $('#target-score').text('Target Score: ' + targetScore);
        currentScore = 0;
        $('#current-score').text('Current Score: ' + currentScore);
    };
    newGame();

    $('.crystal').on('click', function() {
        currentScore += parseInt($(this).attr('gem-value'));
        $('#current-score').text(currentScore);

        if (currentScore === targetScore) {
            alert('Win!');
            newGame();
        }
        else if (currentScore > targetScore) {
            alert('lose!');
            newGame();
        }
    });

    $('#help-button').on('click', function() {
        alert('Each crystal is given a random value between 1 and 12 when the game begins. Click a crystal to add its value to your current score. Try to get your score to match the target score without going over!')
    });
});