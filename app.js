



function game() {

    function bestOfFive() {

        let result = playRound();

        function playRound() {

            let selection1 = 'ROCK';
            let selection2 = 'PAPER';
            let selection3 = 'SCISSORS';
            let playerSelect = prompt('Rock, Paper, or Scissors?').toUpperCase();
            let computerSelect = computerPlay();
            let winner = 'You won! Play another Round!';
            let loser = 'Sorry, you lost that round. Try Again.';
            let tie = "Looks like we have a tie. Let's go for another round.";

            function computerPlay() {
                const computerSelection = Math.floor(Math.random() * 3 );
                const selections = ['ROCK', 'PAPER', 'SCISSORS'];

                return selections[computerSelection];
            } 

            console.log( 'The Computer chooses ' + computerSelect + '.' );
            console.log( 'The Player chooses ' + playerSelect + '.' );

            if (playerSelect === computerSelect) {
                return tie;
            } else if ( playerSelect === selection1 && computerSelect === selection2 ) {
                return loser;
            } else if ( playerSelect === selection1 && computerSelect === selection3 ) {
                return winner;
            } else if ( playerSelect === selection2 && computerSelect === selection1 ) {
                return winner;
            } else if ( playerSelect === selection2 && computerSelect === selection3 ) {
                return loser; 
            } else if ( playerSelect === selection3 && computerSelect === selection1 ) {
                return loser;
            } else if ( playerSelect === selection3 && computerSelect === selection2 ) {
                return winner;
            } else {
                return 'Invalid Round.';
            }

        }

        console.log( result );

        if ( result === 'You won! Play another Round!' ) {
            return '1 point for player';
        } else if ( result === 'Sorry, you lost that round. Try Again.' ) {
            return '-1 point for player';
        } else if ( result === "Looks like we have a tie. Let's go for another round." ) {
            return 'No points awarded for tie.';
        } else {
            return 'Invalid Round.';
        }



    }

    
    console.log( bestOfFive() );
    console.log( bestOfFive() );
    console.log( bestOfFive() );
    console.log( bestOfFive() );
    console.log( bestOfFive() );
}