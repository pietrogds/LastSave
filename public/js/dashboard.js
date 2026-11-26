let graficoLinha = null;
let graficoBarra = null;

function carregarDashboard() {
    let idUsuario = sessionStorage.ID_USUARIO;

    buscarCuriosidades(idUsuario);

    fetch("/quiz/tentativas/" + idUsuario)
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (tentativas) {
                    if (tentativas.length == 0) {
                        aviso_dashboard.innerHTML = "Você ainda não jogou o quiz. Jogue para ver seus resultados aqui!";
                    } else {
                        aviso_dashboard.innerHTML = "";
                        mostrarIndicadores(tentativas);
                        plotarGraficoLinha(tentativas);
                        buscarMediaGeral(tentativas);
                    }
                });
            } else {
                aviso_dashboard.innerHTML = "Não foi possível carregar sua dashboard.";
            }
        })
        .catch(function (erro) {
            console.log(erro);
            aviso_dashboard.innerHTML = "Não foi possível carregar sua dashboard.";
        });
}

function buscarCuriosidades(idUsuario) {
    fetch("/curiosidade/total/" + idUsuario)
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resultado) {
                    kpi_curiosidades.innerHTML = resultado.total;
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function mostrarIndicadores(tentativas) {
    let quantidade = tentativas.length;
    let total = tentativas[0].total_perguntas;
    let soma = 0;
    let melhor = 0;

    for (let i = 0; i < quantidade; i++) {
        soma = soma + tentativas[i].acertos;

        if (tentativas[i].pontos > melhor) {
            melhor = tentativas[i].pontos;
        }
    }

    let media = soma / quantidade;
    let ultima = tentativas[quantidade - 1].pontos;

    kpi_tentativas.innerHTML = quantidade;
    kpi_melhor.innerHTML = melhor + " pts";
    kpi_media.innerHTML = media.toFixed(1).replace(".", ",") + "/" + total;
    kpi_ultima.innerHTML = ultima + " pts";
}

function plotarGraficoLinha(tentativas) {
    let rotulos = [];
    let pontos = [];

    for (let i = 0; i < tentativas.length; i++) {
        rotulos.push("Tentativa " + (i + 1));
        pontos.push(tentativas[i].pontos);
    }

    if (graficoLinha != null) {
        graficoLinha.destroy();
    }

    let ctx = document.getElementById("grafico_linha").getContext("2d");
    graficoLinha = new Chart(ctx, {
        type: "line",
        data: {
            labels: rotulos,
            datasets: [{
                label: "Pontos",
                data: pontos,
                backgroundColor: "rgba(255, 154, 31, 0.3)",
                borderColor: "#ff9a1f",
                borderWidth: 3,
                fill: true
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function buscarMediaGeral(tentativas) {
    fetch("/quiz/media-geral")
        .then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (media) {
                    plotarGraficoBarra(tentativas, media);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });
}

function plotarGraficoBarra(tentativas, media) {
    let quantidade = tentativas.length;
    let somaTotal = 0;
    let somaHistoria = 0;
    let somaCriador = 0;

    for (let i = 0; i < quantidade; i++) {
        somaTotal = somaTotal + tentativas[i].acertos;
        somaHistoria = somaHistoria + tentativas[i].acertos_historia;
        somaCriador = somaCriador + tentativas[i].acertos_criador;
    }

    let minhasMedias = [
        (somaTotal / quantidade).toFixed(1),
        (somaHistoria / quantidade).toFixed(1),
        (somaCriador / quantidade).toFixed(1)
    ];

    let mediasGerais = [
        Number(media.media_acertos),
        Number(media.media_historia),
        Number(media.media_criador)
    ];

    if (graficoBarra != null) {
        graficoBarra.destroy();
    }

    let ctx = document.getElementById("grafico_barra").getContext("2d");
    graficoBarra = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Total", "História dos games", "Sobre o criador"],
            datasets: [
                {
                    label: "Você",
                    data: minhasMedias,
                    backgroundColor: "#ff9a1f",
                    borderColor: "#e06a00",
                    borderWidth: 1
                },
                {
                    label: "Média dos jogadores",
                    data: mediasGerais,
                    backgroundColor: "#1f7de8",
                    borderColor: "#0a3fb8",
                    borderWidth: 1
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
