document.addEventListener("DOMContentLoaded", () => {
    const umaEstrela = parseInt(localStorage.getItem("totalUmaEstrela")) || 0;
    const duasEstrelas = parseInt(localStorage.getItem("totalDuasEstrelas")) || 0;
    const tresEstrelas = parseInt(localStorage.getItem("totalTresEstrelas")) || 0;

    document.getElementById("total-uma-estrela").innerText = umaEstrela;
    document.getElementById("total-duas-estrelas").innerText = duasEstrelas;
    document.getElementById("total-tres-estrelas").innerText = tresEstrelas;
});
