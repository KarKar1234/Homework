// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...




// Function to turn all the lights off
    function lightsoff(){
        document.querySelector('#stopLight').classList.remove('glow');
        document.querySelector('#slowLight').classList.remove('glow');
        document.querySelector('#goLight').classList.remove('glow');

    }


//Function to turn the stop on
function stopLight(){
    lightsoff();
    document.querySelector('#stopLight').classList.add('glow');

}
    //Turn off all the lights
    //Turn on the stop

//Function to turn the slow on
function slowLight(){
    lightsoff();
    document.querySelector('#slowLight').classList.add('glow');

}

    //Turn off all the lights
    //Turn on the stop

//Function to turn the go on
function goLight(){
    lightsoff();
    document.querySelector('#goLight').classList.add('glow');

}

    //Turn off all the lights
    //Turn on the stop



//Add event listeners to each of the buttons

document.querySelector("#stopButton").addEventListener("click", stopLight);

document.querySelector("#slowButton").addEventListener("click", slowLight);

document.querySelector("#goButton").addEventListener("click", goLight);

