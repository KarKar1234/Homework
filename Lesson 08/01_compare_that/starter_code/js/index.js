
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
      // A is greater
        if (a > b){
          comparison = ">";
        } else if (b > a){
          comparison = "<";
        } else if (a == b){
          comparison = "==";
        } else {
          comparison ="N/A";
        } 

      // One more more isn't a number
 
     document.querySelector('#comparison').innerText = comparison;
   };
 