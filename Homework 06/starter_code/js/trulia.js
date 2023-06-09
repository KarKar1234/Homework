

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation

document.querySelector(".trulia-nav-toggle").addEventListener('click', function(e){
  e.preventDefault();
  let navset = document.querySelectorAll('.trulia-nav > nav ul');

  // why can't i just do trulia-nav-mobilehide for above ^


    for(let i = 0; i < navset.length; i++){
    navset[i].classList.toggle('trulia-nav-mobilehide');
    }



});



// first loop when i click on something run this function
















// document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
//   e.preventDefault();
//   let navSet = document.querySelectorAll('.trulia-nav > nav ul');

//   for(let n=0;n<navSet.length;n++){
//       navSet[n].classList.toggle('trulia-nav-mobilehide');
//   }

// });





// Loop through all the cards
for(var i = 0; i < truliaCards.length; i++){
  
  
  truliaCards[i].addEventListener('click', function(){
  
  for (var a = 0; a < truliaCards.length; a++){
    truliaCards[a].classList.remove('trulia-featured-grid-item')
  }

  this.classList.add('trulia-featured-grid-item');
  
  
})}
  // Add a click listener on each card
      
      // Remove the featured class


      // Add the featured class on the one clicked on



  });  

  