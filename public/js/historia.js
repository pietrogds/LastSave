// =========================================================
// LastSave - Placar de vendas dos consoles (aba História)
// Usa: vetores, for, if, operações matemáticas e innerHTML
// =========================================================

// Os dois vetores andam juntos: a posição 0 de um combina com a posição 0 do outro
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

// unidades vendidas, em milhões
let vendas = [155, 154, 118, 106, 101, 87, 84, 52, 24, 10, 3];

function montarPlacar() {
    let total = 0;
    let maior = vendas[0];
    let menor = vendas[0];
    let posicaoMaior = 0;
    let posicaoMenor = 0;

    // 1) percorre o vetor para achar o total, o maior e o menor
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

    // 2) monta uma barra para cada console
    let html = "";

    for (let i = 0; i < consoles.length; i++) {
        // regra de três: o maior vira 100% e os outros ficam proporcionais
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

    // 3) contas para o resumo
    let media = total / vendas.length;
    let vezes = maior / menor;

    // toFixed(1) deixa 1 casa decimal e o replace troca o ponto pela vírgula (81.3 -> 81,3)
    let mediaTexto = media.toFixed(1).replace(".", ",");

    resumo_placar.innerHTML =
        "<b>Fazendo as contas:</b> somando todos, foram <b>" + total + " milhões</b> de consoles vendidos, " +
        "uma média de <b>" + mediaTexto + " milhões</b> por console. " +
        "O campeão, <b>" + consoles[posicaoMaior] + "</b>, vendeu <b>" + vezes.toFixed(0) + " vezes mais</b> " +
        "que o último colocado, o <b>" + consoles[posicaoMenor] + "</b>.";
}
