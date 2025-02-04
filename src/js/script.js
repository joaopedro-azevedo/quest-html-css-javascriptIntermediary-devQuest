

 const submitButton = document.querySelector(".submitButton");
 submitButton.addEventListener('click', function(clicked){
  
    clicked.preventDefault();

    

    function check () {
        const inputs = document.querySelectorAll(".inputs");
    
     inputs.forEach(function(input){
        let infoValidated = input.value();
        if(){
         input.classList.remove("notFilled", "filled");
         const p = document.getElementsByClassName("hide");
        }
         if(infoValidated){
             
             input.classList.add("notFilled");
          
          
         } else {
             input.classList.add("filled");
         }
     });
    }
 });









// let submitButton = document.querySelectorAll(".submitButton");
// console.log(submitButton);

// submitButton.addEventListener("click", (clicked) => {
//     clicked.preventDefaut();
// });

// function sendForm() {
//     check();
// }

// function check () {
//     let infoUser = document.querySelectorAll(".inputs");
    

//     infoUser.forEach(function(input){
//         let infoValidated = input.value();
//         console.log(infoValidated);
//         let putMandatoryText = input.nextElementSibling;
        
//         if(digitalInfo){
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


