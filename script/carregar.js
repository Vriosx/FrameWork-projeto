console.log("carregar dados");

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas.forEach((tarefa, index) => {
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

        document.querySelector("#lista-tarefas").appendChild(card);
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
        
        document.querySelector("#lista-tarefas").innerHTML = "";
        
        tarefas.forEach((tarefa, newIndex) => {
            const card = document.createElement("div");
            card.classList.add("nes-container", "with-title", "is-centered");

            card.innerHTML = `<p class="title">${tarefa.titulo}</p>
                <p>${tarefa.descricao}</p>
                
                <div class="stars">
                    <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 1)}"></i>
                    <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 2)}"></i>
                    <i class="nes-icon is-large star ${getStarClass(tarefa.pontos, 3)}"></i>
                </div>
                <button type="button" class="nes-btn is-error" onclick="removerTarefa(${newIndex})">Apagar</button>`;

            document.querySelector("#lista-tarefas").appendChild(card);
        });
      }
