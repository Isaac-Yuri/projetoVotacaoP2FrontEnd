let votosJeander, votosGabriel, total = 0
fetch("https://projetovotacaop2backend-nz5qyix2da-tl.a.run.app/andamento")
    .then(data => data.json())
    .then(json => {
        votosJeander = json.jeander;
        votosGabriel = json.gabriel;
        total = json.total;
        document.getElementById("cand1").innerHTML = calcularPorcentagem(votosJeander, total)
        document.getElementById("cand2").innerHTML = calcularPorcentagem(votosGabriel, total)
    })

function calcularPorcentagem(parte, total) {
    let porcentagem = (parte / total) * 100;
    return porcentagem.toFixed(2)
}