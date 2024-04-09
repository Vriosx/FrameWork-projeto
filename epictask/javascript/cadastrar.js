document.querySelector("#botao-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")
    
    const tarefa = {
        titulo : form.titulo.value,
        descricao : form.descricao.value,
        pontos : form.pontos.value
    }

    validar(tarefa)
    console.log(titulo, descricao, pontos)

});

function validar(tarefa){
    limparErros()

    if(tarefa.titulo === "" ){
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "O titulo é obrigatorio!"
    }
    if(tarefa.descricao === ""){
        console.log("Titulo Inválido")
    }
    if(tarefa.pontos === ""){
        console.log("Titulo Inválido")
    }
}

function limparErros(){
    document.querySelector("#titulo").classList.remove("is-error")
    document.querySelector("#titulo-error").innerText = ""
}
