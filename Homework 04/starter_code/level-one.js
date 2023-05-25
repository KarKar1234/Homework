/*
 * DOTS: Level One
 *
 */

//Current score
let score = 0;

//Making ball variable
let ballEl = document.querySelector('.js-ball');

//Display score as a variable
let scoreEl = document.querySelector('.js-score');

//Grab the ball and click on it
  //Current score increases by 10
    //Display score increases by 10
      //When score reaches 100, run declareWinner



// function addScore(){
//   score = score += 10;

//   document.querySelector("#score js-score").innerHTML = score;

//   console.log(score);

 
// };

// let clicker = ballEl.addEventListener('click', addScore);


let clicker = ballEl.addEventListener('click', function(){
  score += 10;

  scoreEl.innerHTML = score;
  if (score >= 100) {
    declareWinner();
  }

})


function declareWinner() {
  document.body.classList.add('game-over');

}

//function for when js-ball is clicked

//function that increases the score by 10



//function for when the score reaches 100 it declaresWinner

