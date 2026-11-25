function validarSessao() {
    let email = sessionStorage.EMAIL_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;

    let b_usuario = document.getElementById("b_usuario");

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

function liberarMenu() {
    let nome = sessionStorage.NOME_USUARIO;

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

        caixa_level.innerHTML = `
            <h2 class="texto-pixel">LEVEL UP!</h2>
            <p>
                Parabéns, <b>${nome}</b>! Você chegou ao <b>level máximo</b>:
                todas as abas estão desbloqueadas.
            </p>
            <div class="barra-xp">
                <div class="xp" style="width: 100%"></div>
            </div>
            <p class="texto-xp">5 de 5 abas desbloqueadas</p>
            <a class="botao botao-azul botao-grande" href="historia.html">Começar pela História</a>
        `;
    }
}

function aguardar() {
    let divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    let divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    let divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}
