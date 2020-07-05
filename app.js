/*

I know the code isn't "clean", especially with nesting the functions like I did. Just trying to get a hold of the basics right now. 

The playRound function works perfectly on it's own as tested by Console. However, after adding the bestOfFive function things went wonky. 
I initially tried doing it as a separate function from playRound and call upon the return result of the playRound function. Not only did 
this not work, but also wouldn't allow the conditionals (if/else) of playRound to run at all. Once I nested the functions as they are, 
it would allow the conditionals to run. However, there is an error that pops up in both situations, at least eventually. 

The error shows that the winner variable (and assuming loser and tie variables as well) is not defined for the bestOfFive function. A couple of other things I tried:

- Tried placing winner, loser, and tie as strings instead which got rid of the red text error, however it came up in console (Google Chrome) with a grey 'undefined'. 

- Tried copying the winner, loser, and tie variables from playRound() to go directly under the result variable in bestOfFive(). While it got rid of the error and the 
grey undefined. It makes the initial if.. winner fire even if it was a loss. 

I'm not understanding how the variable of computerSelect is able to pull the result of computerPlay function accurately, but the result variable cannot pull the 
result of playRound function despite setting it up virtually the same way.

I don't think it matters, but the messages for the winner, loser, and tie under the bestOfFive function are just placeholders as a note to myself of how I am 
thinking to determine the winner of the game after the 5 rounds are played. I didn't want to code the function any further until I knew this portion was working properly. 

I'm really doing my best not to pull a solution up from a tutorial somewheres... As I want to finally understand how to write JavaScript, but I'm at a lost at this 
point, so I thought I would ask you for some kind of direction on figuring this part out so I don't have to give in on finding a tutorial. Especially after getting 
this far without one.

*/



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

        console.log( playRound() );

        if ( result === winner ) {
            return '1 point for player';
        } else if ( result === loser ) {
            return '-1 point for player';
        } else if ( result === tie ) {
            return 'No points awarded for tie.';
        }
    }

    console.log( bestOfFive() );
}
