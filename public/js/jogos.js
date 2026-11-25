let anoAtual = 2026;

let anosLancamento = [1998, 1986, 1986, 2009, 1996];

function calcularIdades() {
    for (let i = 0; i < anosLancamento.length; i++) {
        let idade = anoAtual - anosLancamento[i];

        let campo = document.getElementById("idade_" + i);
        campo.innerHTML = idade;
    }
}
