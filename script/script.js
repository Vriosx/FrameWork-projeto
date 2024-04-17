document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#botao-cadastrar").addEventListener("click", () => {
        const form = document.querySelector("form");

        const tarefa = {
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            pontos: capturarPontosSelecionados() 
        };

        if (validar(tarefa)) {
            let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
            tarefas.push(tarefa);
            localStorage.setItem("tarefas", JSON.stringify(tarefas));

            window.location = "/";
        }
    });
});

function validar(tarefa) {
    let valid = true;

    limparErros();

    if (tarefa.titulo === "" || tarefa.titulo.length < 3) {
        document.querySelector("#titulo").classList.add("is-error");
        document.querySelector("#titulo-error").innerText = "O título deve ter mais que 3 caracteres!";
        valid = false;
    }

    if (tarefa.descricao === "") {
        document.querySelector("#descricao").classList.add("is-error");
        document.querySelector("#descricao-error").innerText = "A descrição deve ter mais que 3 caracteres!";
        valid = false;
    }

    return valid;
}

function limparErros() {
    document.querySelectorAll(".nes-input.is-error, .nes-textarea.is-error")
        .forEach(campo => campo.classList.remove("is-error"));

    document.querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "");
}

function capturarPontosSelecionados() {
    const estrelasSelecionadas = document.querySelectorAll("input[name='answer']:checked");
    if (estrelasSelecionadas.length > 0) {
        return parseInt(estrelasSelecionadas[0].parentNode.textContent);
    }
    return 3; 
}


function getStarsHTML(pontos) {
    let starsHTML = '';
    for (let i = 1; i <= 3; i++) {
        if (pontos >= i) {
            starsHTML += '<i class="nes-icon is-large star"></i>';
        } else {
            starsHTML += '<i class="nes-icon is-large star is-transparent"></i>';
        }
    }
    return starsHTML;
}


