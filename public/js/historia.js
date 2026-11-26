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

let curiosidades = [
    "O <b>Spacewar!</b>, um dos primeiros jogos da história, foi criado em 1962 por estudantes do MIT, num computador do tamanho de uma geladeira.",
    "Antes de ser fabricante de videogames, a <b>Nintendo</b> foi fundada em 1889 fabricando cartas de baralho.",
    "O Mario estreou em 1981 no <b>Donkey Kong</b>, mas ainda se chamava <b>Jumpman</b> e era carpinteiro, não encanador.",
    "No Japão, o <b>Pac-Man</b> se chamava <b>Puck-Man</b>. O nome mudou nos EUA para evitar que trocassem o P por outra letra nos fliperamas.",
    "Em 1983, a Atari enterrou milhares de cartuchos de <b>E.T.</b> no deserto do Novo México. Eles foram desenterrados em 2014.",
    "O <b>Tetris</b> foi criado em 1984 por Alexey Pajitnov, um programador da antiga União Soviética.",
    "O <b>Sonic</b> foi criado para ser o mascote da Sega e bater de frente com o Mario na guerra dos consoles.",
    "O <b>PlayStation</b> nasceu de uma parceria cancelada: a Sony ia fazer um leitor de CD para o Super Nintendo.",
    "O <b>PlayStation 2</b> é o console mais vendido da história, com mais de 155 milhões de unidades.",
    "Um <b>Game Boy</b> sobreviveu a um bombardeio na Guerra do Golfo e continuou funcionando. Ele ficou exposto na loja da Nintendo em Nova York.",
    "O <b>Minecraft</b> é o jogo mais vendido de todos os tempos, com mais de 350 milhões de cópias.",
    "Ralph Baer, chamado de <b>pai dos videogames</b>, criou a \"Brown Box\", protótipo que virou o Magnavox Odyssey.",
    "O jogo <b>Adventure</b>, do Atari 2600, tem um dos primeiros easter eggs da história: uma sala secreta com o nome do criador.",
    "O criador de <b>Pokémon</b>, Satoshi Tajiri, se inspirou no seu hobby de infância: colecionar insetos.",
    "O famoso <b>Konami Code</b> (cima, cima, baixo, baixo, esquerda, direita, esquerda, direita, B, A) foi criado para facilitar os testes do jogo Gradius.",
    "Shigeru Miyamoto se inspirou nas explorações que fazia em campos e cavernas quando criança para criar <b>The Legend of Zelda</b>."
];

let ultimaPosicao = -1;

function sortearCuriosidade() {
    let posicao = Math.floor(Math.random() * curiosidades.length);

    while (posicao == ultimaPosicao) {
        posicao = Math.floor(Math.random() * curiosidades.length);
    }

    ultimaPosicao = posicao;

    div_curiosidade.innerHTML = "<b>Você sabia?</b> " + curiosidades[posicao];

    registrarSorteio(posicao);
}

function registrarSorteio(posicao) {
    fetch("/curiosidade/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            numeroCuriosidadeServer: posicao + 1,
            idUsuarioServer: sessionStorage.ID_USUARIO
        })
    }).catch(function (erro) {
        console.log(erro);
    });
}
