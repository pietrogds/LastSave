let consoles = [
    "PlayStation 2",
    "Nintendo DS",
    "Game Boy",
    "PlayStation 4",
    "Wii",
    "PlayStation 3",
    "Xbox 360",
    "Xbox One",
    "Xbox",
    "Game Gear",
    "Atari Lynx"
];

let vendas = [155, 154, 118, 106, 101, 87, 84, 52, 24, 10, 3];

function montarPlacar() {
    let total = 0;
    let maior = vendas[0];
    let menor = vendas[0];
    let posicaoMaior = 0;
    let posicaoMenor = 0;

    for (let i = 0; i < vendas.length; i++) {
        total = total + vendas[i];

        if (vendas[i] > maior) {
            maior = vendas[i];
            posicaoMaior = i;
        } else if (vendas[i] < menor) {
            menor = vendas[i];
            posicaoMenor = i;
        }
    }

    let html = "";

    for (let i = 0; i < consoles.length; i++) {
        let largura = (vendas[i] * 100) / maior;

        let classe = "barra";
        if (i == posicaoMaior) {
            classe = "barra barra-campeao";
        }

        html = html +
            '<div class="linha-placar">' +
                '<span class="nome-console">' + (i + 1) + 'º ' + consoles[i] + '</span>' +
                '<div class="fundo-barra">' +
                    '<div class="' + classe + '" style="width: ' + largura + '%">' + vendas[i] + '</div>' +
                '</div>' +
            '</div>';
    }

    placar.innerHTML = html;

    let media = total / vendas.length;
    let vezes = maior / menor;

    let mediaTexto = media.toFixed(1).replace(".", ",");

    resumo_placar.innerHTML =
        "<b>Fazendo as contas:</b> somando todos, foram <b>" + total + " milhões</b> de consoles vendidos, " +
        "uma média de <b>" + mediaTexto + " milhões</b> por console. " +
        "O campeão, <b>" + consoles[posicaoMaior] + "</b>, vendeu <b>" + vezes.toFixed(0) + " vezes mais</b> " +
        "que o último colocado, o <b>" + consoles[posicaoMenor] + "</b>.";
}
