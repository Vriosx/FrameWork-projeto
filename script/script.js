document.addEventListener("DOMContentLoaded", () => {
    // Adiciona evento de clique ao botão "Cadastrar"
    document.querySelector("#botao-cadastrar").addEventListener("click", () => {
        const form = document.querySelector("form");

        // Obtém os dados do formulário
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


            if (tarefa.pontos === 1) {
                const totalUmaEstrelaElement = document.getElementById("total-uma-estrela");
                totalUmaEstrelaElement.innerText = parseInt(totalUmaEstrelaElement.innerText) + 1;
            } else if (tarefa.pontos === 2) {
                const totalDuasEstrelasElement = document.getElementById("total-duas-estrelas");
                totalDuasEstrelasElement.innerText = parseInt(totalDuasEstrelasElement.innerText) + 1;
            } else if (tarefa.pontos === 3) {
                const totalTresEstrelasElement = document.getElementById("total-tres-estrelas");
                totalTresEstrelasElement.innerText = parseInt(totalTresEstrelasElement.innerText) + 1;
            }

        }
    });

    carregarTarefas();
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
    const estrelasSelecionadas = document.querySelector("input[name='answer']:checked");
    if (estrelasSelecionadas) {
        return parseInt(estrelasSelecionadas.value);
    }
    return 3; // Padrão: 3 estrelas
}

function carregarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas.forEach((tarefa, index) => {
        const card = criarCardTarefa(tarefa, index);
        document.querySelector("#lista-tarefas").appendChild(card);

        // Atualiza a contagem de estrelas ao carregar as tarefas
        if (tarefa.pontos === 1) {
            const totalUmaEstrelaElement = document.getElementById("total-uma-estrela");
            totalUmaEstrelaElement.innerText = parseInt(totalUmaEstrelaElement.innerText) + 1;
        } else if (tarefa.pontos === 2) {
            const totalDuasEstrelasElement = document.getElementById("total-duas-estrelas");
            totalDuasEstrelasElement.innerText = parseInt(totalDuasEstrelasElement.innerText) + 1;
        } else if (tarefa.pontos === 3) {
            const totalTresEstrelasElement = document.getElementById("total-tres-estrelas");
            totalTresEstrelasElement.innerText = parseInt(totalTresEstrelasElement.innerText) + 1;
        }
    });
}

// Função para criar um card de tarefa
function criarCardTarefa(tarefa, index) {
    const card = document.createElement("div");
    card.classList.add("nes-container", "with-title", "is-centered");

    card.innerHTML = `<p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        
        <div class="stars">
            <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 1)}"></i>
            <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 2)}"></i>
            <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 3)}"></i>
        </div>
        <button type="button" class="nes-btn is-error" onclick="removerTarefa(${index})">Apagar</button>`;

    return card;
}

// Função para obter a classe das estrelas
function getStarClass(pontos, estrela) {
    if (pontos >= estrela) {
        return "";
    } else if (pontos >= estrela - 0.5) {
        return "is-half";
    } else {
        return "is-empty";
    }
}

// Função para remover uma tarefa
function removerTarefa(index) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    // Limpa a lista de tarefas e recarrega
    document.querySelector("#lista-tarefas").innerHTML = "";
    carregarTarefas();
}
