
 let submitButton = document.querySelector(".submitButton");

 submitButton.addEventListener('click', function(clicked){  
    clicked.preventDefault();
    enviarFormulario();
});

    
function enviarFormulario(){
    check();
}

function check () {
    let inputs = document.querySelectorAll(".inputs");
    
    inputs.forEach(function(input){
        let infoValidated = input.value;
        let putMandatoryText = input.nextElementSibling;

        if(infoValidated){
         input.classList.remove("notFilled", "filled");
         putMandatoryText.textContent += "";
        }

        if(infoValidated){ 
            input.classList.add("filled");
         } else {
            input.classList.add("notFilled");
            putMandatoryText.innerHTML = `Campo obrigatório*`;
         }
    });
}


