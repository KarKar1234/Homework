let playerA = "scissors"
let playerB = "rock"

function playGame(playerA,playerB){
    if(playerA == playerB){
        return "tie";
    }
    
    if(playerA == "scissors"){
        if(playerB == "rock"){
            return "B";
        }else{
            return "A";
        }
    }
    
    
    if(playerA == "rock"){
        if(playerB == "paper"){
            return "B";
        }else{
            return "A";
        }
    }
    
    if(playerA == "paper"){
        if(playerB == "scissors"){
            return "B";
        }else{
            return "A";
        }
    }
}



// What does a thermostat do?
// * Tells the temperature
// * Turns on the furnance
// Turns off the furnance
// Get Wanted Temperature

// Decide whether to turn furnace on or off
// function named furnaceManage

// current = Get the current temperature
// wanted = Get the wanted temperature

// if current < wanted
//     turn on

// if current > = wanted
//     turn off 

// loop furnaceManage


