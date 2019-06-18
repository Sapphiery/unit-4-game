$(document).ready( function() {
    var targetScore, currentScore;

    var newGame = function() {
        for (var i = 1; i <= 4; i++) {
            var randoNumero = Math.floor(Math.random() * 13);
            var thisButton = '#gem' + i;
            $(thisButton).attr('gem-value', randoNumero);
            $(thisButton).text(randoNumero);
        }
        targetScore = Math.floor(Math.random() * 102) + 19;
        $('#target-score').text(targetScore);
        currentScore = 0;
        $('#current-score').text(currentScore);
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
});