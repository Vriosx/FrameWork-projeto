
document.querySelector("#botao-cadastrar").addEventListener("click", () => {
   
    const form = document.querySelector("form");

   
    const tarefa = {
        titulo: form.querySelector("#titulo").value,
        descricao: form.querySelector("#descricao").value,
    };

    
    validar(tarefa);
    console.log(titulo, descricao)
});


function validar(tarefa) {
    
    limparErros();

    
    if (tarefa.titulo === "" || tarefa.titulo.length < 3) {
        
        document.querySelector("#titulo").classList.add("is-error");

        document.querySelector("#titulo-error").innerText = "O título deve ter mais que 3 caracteres!";
    }

   
    if (tarefa.descricao === "" || tarefa.descricao.length < 3) {
    
        document.querySelector("#descricao").classList.add("is-error");

        alert("A descrição deve ter mais que 3 caracteres!");
    }
}


function limparErros() {
   
    document.querySelector("#titulo").classList.remove("is-error");
    document.querySelector("#descricao").classList.remove("is-error");
    document.querySelector("#titulo-error").innerText = "";
}