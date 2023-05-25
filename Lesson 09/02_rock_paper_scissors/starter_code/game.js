



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    
    // Create a random number
    let random = Math.random();

    if(random < 0.333){
        return "rock";

    }

    if(random < 0.67777){
        return "paper";

    }

    else {
        return "scissors";

    }

    // Multiply the number by 3 to make it between 1 and 3
    // Round the number up

    // If 1, it's a rock

    //If 2, it's a paper

    //If 3, it's a scissors

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.



 */



function compare(me, opponent) {

    document.querySelector("#computerSelection").innerText = opponent;

    if (me === opponent) {
        return 'Its a tie!'

    }
        else if(me === 'rock'){
            if (opponent == 'paper') {
                return 'You lose!!'
            }
            else if (opponent === 'scissors'){
                return 'You win!! NICE'
            }
        }
        else if(me === 'paper'){
            if (opponent === 'rock') {
                return 'You lose!!'
            }
            else if (opponent === 'scissors'){
                return 'You win!! NICE'
            }
        }
        else if(me === 'scissors'){
            if (opponent === 'paper') {
                    return 'You win!!'
            }
            else if (opponent === 'rock'){
                    return 'You lose!! NICE'
            }
        }

    };

   

  


    // Decide who wins

    // Target the id computerSelection and put what the computer chose in the text
    

    // Target the decision and display who wins
    






// jQuery( document ).ready(function() {
    document.addEventListener('DOMContentLoaded', function(event) {


    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
    
    // When I click on scissors
        // Prepare the link from executing
        // Get the computer's choice
    document.querySelector("#scissors").addEventListener('click', function(){

        let result = compare('scissors', computerChoice());
        document.querySelector("#decision").innerHTML = result;
    });

        // Compare scissors to the computer's choice

    // When I click on paper
    document.querySelector("#paper").addEventListener('click', function(){
        
        let result = compare('paper', computerChoice());
        document.querySelector("#decision").innerHTML = result;


    });

        // Prepare the link from executing
        // Get the computer's choice
        
        // Compare paper to the computer's choice

    // When I click on rock
    document.querySelector("#rock").addEventListener('click', function(){
        
        let result = compare('rock', computerChoice());
        document.querySelector("#decision"). innerHTML = result;
    
    });

        // Prepare the link from executing
        // Get the computer's choice
        
        // Compare rock to the computer's choice


});
