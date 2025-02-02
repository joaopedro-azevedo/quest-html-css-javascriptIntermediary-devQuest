
// let inputs = document.querySelectorAll(".inputs");

// console.log(inputs.length);
// console.log(inputs);


let submitButton = document.querySelector(".submitButton");
console.log(submitButton);



/* criar um evento, onde, ao clicar no submit, passar pelo array inputs e ver se está preenchido ou não, se sim, colocar o estilo verde, se não, colocar o estilo vermelho */

submitButton.addEventListener('submit', function(clicked){
    clicked.preventDefault();

    function verificarCampos(){
        let userInfo = document.querySelectorAll('.inputs')
        
        userInfo.forEach(function(){
            
        })
    }
})

