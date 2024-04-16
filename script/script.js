
document.querySelector("#botao-cadastrar").addEventListener("click", () => {
   
    const form = document.querySelector("form");
    
    const tarefa = {
        titulo : form.titulo.value,
        descricao : form.descricao.value
    }

    
    if(validar(tarefa)){
        console.log(tarefa)
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        
        window.location = "/"
    }
});


function validar(tarefa) {
    let valid = true 

    limparErros();

    
    if (tarefa.titulo === "" || tarefa.titulo.length < 3) {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "O título deve ter mais que 3 caracteres!"
        valid = false;
    }

    if(tarefa.descricao === ""){
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-error").innerText= "A descrição deve ter mais que 3 caracteres!"
        valid = false;
    }

    return valid
}


function limparErros() {
    document.
    querySelectorAll(".nes-input.is-error, nes-textarea.is-error")
    .forEach(campo => campo.classList.remove("is-error"))

    document
    .querySelectorAll("span.is-error")
    .forEach(span => span.innerText = "")
}