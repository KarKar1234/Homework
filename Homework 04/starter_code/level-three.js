/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


let ballEl = document.querySelector('.js-ball ');

let ballEl2 = document.querySelector('.js-ball2');

let ballEl3 = document.querySelector('.js-ball3');

let clicker = ballEl.addEventListener('click', function(){
    score = score += 20;
  
    scoreEl.innerHTML = score;
    if (score >= 100) {
      declareWinner();
    }
  
  })

  let clicker2 = ballEl2.addEventListener('click', function(){
    score = score += 5;
  
    scoreEl.innerHTML = score;
    if (score >= 100) {
      declareWinner();
    }
  
  })

  let clicker3 = ballEl3.addEventListener('click', function(){
    score = score += 10;
  
    scoreEl.innerHTML = score;
    if (score >= 100) {
      declareWinner();
    }
  
  })




function declareWinner() {
    document.body.classList.add('game-over');
  
}

