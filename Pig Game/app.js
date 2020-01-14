var scores, roundScore, activePlayer, gamePlaying;
init();
//Roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        //Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //Display the result
        var diceDUM = document.querySelector('.dice');
        diceDUM.style.display = 'block';
        diceDUM.src = 'dice-' + dice + '.png';

        if ( dice !== 1 ) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

//Hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying) {
        //Add current score to globbal score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        //Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer()
        }
    }
});

//New button
document.querySelector('.btn-new').addEventListener('click', init);

//functions
//1
function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     
     document.querySelector('.dice').style.display = 'none';
}

//2
function init() {

     scores = [0, 0];
     activePlayer = 0;
     roundScore = 0;
     gamePlaying = true;

     document.querySelector('.dice').style.display = 'none';
     document.getElementById('score-0').textContent = '0';
     document.getElementById('score-1').textContent = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     document.getElementById('name-0').textContent = 'Player 1';
     document.getElementById('name-1').textContent = 'Player 2';
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
}




