

 let submitButton = document.querySelector(".submitButton");
 submitButton.addEventListener('click', function(clicked){  
    clicked.preventDefault();
});
    
function enviarFormulario(){
    check();
}

function check () {
    const inputs = document.querySelectorAll(".inputs");
    
    inputs.forEach(function(input){
        let infoValidated = input.value;

        if(infoValidated){
         input.classList.remove("notFilled", "filled");
        }

        if(infoValidated){ 
            input.classList.add("notFilled");
         } else {
             input.classList.add("filled");
         }
    });
}










// const botaoDoFormulario = document.querySelectorAll(".submitButton");

// botaoDoFormulario.addEventListener("click", function (clicked) {

//     clicked.preventDefaut();

// });


// function enviarFormulario() {
//     verificarSeFoiPreenchido();
// }

// function verificarSeFoiPreenchido() {
//     let infoUser = document.querySelectorAll(".inputs");
    

//     infoUser.forEach(function(input){
//         let infoValidated = input.values();
//         console.log(infoValidated);
//         let putMandatoryText = input.nextElementSibling;
        
//         if(infoValidated){
//             input.classList.remove('filled', 'notFilled');
//             putMandatoryText.textContent = "";
//         }        

//         if(infoValidated){
//             input.classList.add("filled");
//         } else{
//             input.classList.add("notFilled");
//             putMandatoryText.innerHTML = "Campo obrigatório*";
//         }
//     })
// }

