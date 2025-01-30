/* Criar as variáveis com os inputs e com o botão submit */

let inputs = document.querySelectorAll(".inputs");

console.log(inputs.length);
console.log(inputs);


let submitButton = document.getElementsByClassName("submitButton");

console.log(submitButton);



/* criar um evento, onde, ao clicar no submit, passar pelo array inputs e ver se está preenchido ou não, se sim, colocar o estilo verde, se não, colocar o estilo vermelho */

inputs.forEach(function() {
    submitButton.addEventListener("click", function(){

        if(inputs.reportValidity()){
            filled();
        } else{
            notFilled();
        }
    })
})

function filled(){
    inputs.classList.add("filled");
}

function notFilled(){
    inputs.classList.add("notFilled");
}


