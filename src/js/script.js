
const inputs = document.querySelectorAll(".inputs");

const submitButton = document.querySelector(".submitButton");

submitButton.addEventListener('click', function(clicked){
    
    inputs.forEach(function(input){
        
        input.classList.remove("notFilled", "filled");

        const p = document.getElementsByClassName("hide");
        console.log(p);
        
        if(inputs.values === ""){

            

            clicked.preventDefault();
            input.classList.add("notFilled");
            
            
        } else {
            input.classList.add("filled");
        }
    });
});

