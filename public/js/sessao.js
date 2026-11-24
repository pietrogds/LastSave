// sessão
// Usada nas páginas que precisam de login (História, Jogos, Minha História e Quiz)
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "index.html";
}

// Usada na página inicial: se o usuário já fez login, libera as abas do menu
function liberarMenu() {
    var nome = sessionStorage.NOME_USUARIO;

    if (nome != null) {
        menu.innerHTML = `
            <li class="agora"><a href="index.html">Início</a></li>
            <li><a href="historia.html">História</a></li>
            <li><a href="jogos.html">Jogos</a></li>
            <li><a href="minha-historia.html">Minha História</a></li>
            <li><a href="quiz.html">Quiz</a></li>
        `;

        acesso.innerHTML = `
            <span class="ola">Olá, <b>${nome}</b></span>
            <button class="botao botao-azul" onclick="limparSessao()">Sair</button>
        `;
    }
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
