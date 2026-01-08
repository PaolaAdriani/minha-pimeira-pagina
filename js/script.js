//evento que irá ocorrer//
document.getElementById("botao-enviar").addEventListener("click", validaFormulario)
//função informando os campos, valores e utilizando operadores relacionais igual == e diferente !=//
function validaFormulario (){
     if(document.getElementById("nome").value != "" &&  
        document.getElementById("email").value != "" 
        && document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha todos os campos")
    }
}