
const inputs = document.querySelectorAll(".inputs");

const submitButton = document.querySelector(".submitButton");

/* criar um evento, onde, ao clicar no submit, passar pelo array inputs e ver se está preenchido ou não, se sim, colocar o estilo verde, se não, colocar o estilo vermelho */

submitButton.addEventListener('click', function(clicked){
    clicked.preventDefault();

    inputs.forEach(function(){
        
        if(inputs.values === ""){
            inputs.classList.add("notFilled");
        } else {
            inputs.classList.add("filled");
        }
    })
})

