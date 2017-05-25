"use strict";
(function(){
  
    //make sure the page is loaded
    window.onload = function(){

        // load the page elements into variables for later reference
        let incrementButton = document.querySelector("#increment");
        let decrementButton = document.querySelector("#decrement");
        let counter = document.querySelector("#counter");
        
        incrementButton.addEventListener("click", function(event){
            
            var cntr = parseInt(counter.innerHTML) + 1;
            
            counter.innerHTML = cntr;
            
            if (cntr > 9) {
                counter.style.color = "red";
            }
        });
        
        decrementButton.addEventListener("click", function(even) {
            let cntr = parseInt(counter.innerHTML);
            if (cntr > 0) {
                cntr -= 1;
                counter.innerHTML = cntr;
            }
            if (cntr < 10){
                counter.style.color = "black";
            }
        });
    }
    
})();