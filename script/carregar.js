console.log("Carregando dados...");

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

console.log("Tarefas:", tarefas);

tarefas.forEach((tarefa, index) => {
    const card = document.createElement("div");
    card.classList.add("nes-container", "with-title", "is-centered");

    card.innerHTML = `<p class="title">${tarefa.titulo}</p>
        <p>${tarefa.descricao}</p>
        
        <div class="stars">
            <i id="uma-estrela-${index}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 1)}"></i>
            <i id="duas-estrelas-${index}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 2)}"></i>
            <i id="tres-estrelas-${index}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 3)}"></i>
        </div>
        <button type="button" class="nes-btn is-error" onclick="removerTarefa(${index})">Apagar</button>`;

    document.querySelector("#lista-tarefas").appendChild(card);
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

function getStarClass(pontos, estrela) {
    if (pontos >= estrela) {
        return "";
    } else if (pontos >= estrela - 0.5) {
        return "is-half";
    } else {
        return "is-empty";
    }
}

function removerTarefa(index) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    console.log("Tarefa removida:", index);

    document.querySelector("#lista-tarefas").innerHTML = "";
    tarefas.forEach((tarefa, newIndex) => {
        const card = document.createElement("div");
        card.classList.add("nes-container", "with-title", "is-centered");

        card.innerHTML = `<p class="title">${tarefa.titulo}</p>
            <p>${tarefa.descricao}</p>
            
            <div class="stars">
                <i id="uma-estrela-${newIndex}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 1)}"></i>
                <i id="duas-estrelas-${newIndex}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 2)}"></i>
                <i id="tres-estrelas-${newIndex}" class="nes-icon is-large star ${getStarClass(tarefa.pontos, 3)}"></i>
            </div>
            <button type="button" class="nes-btn is-error" onclick="removerTarefa(${newIndex})">Apagar</button>`;

        document.querySelector("#lista-tarefas").appendChild(card);
    });
}
