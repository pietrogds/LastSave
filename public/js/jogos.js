// =========================================================
// LastSave - Idade dos jogos (aba Jogos)
// Usa: vetor, for, operação de subtração e innerHTML
// =========================================================

let anoAtual = 2026;

// ano de lançamento de cada jogo, na mesma ordem da página:
// 0 = Ocarina of Time, 1 = Metroid, 2 = Castlevania, 3 = Minecraft, 4 = Pokémon
let anosLancamento = [1998, 1986, 1986, 2009, 1996];

function calcularIdades() {
    for (let i = 0; i < anosLancamento.length; i++) {
        let idade = anoAtual - anosLancamento[i];

        // procura o <b id="idade_0">, <b id="idade_1">... e escreve a idade dentro
        let campo = document.getElementById("idade_" + i);
        campo.innerHTML = idade;
    }
}
