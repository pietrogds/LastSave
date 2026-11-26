let database = require("../database/config");

function registrar(acertos, acertosHistoria, acertosCriador, pontos, totalPerguntas, idUsuario) {
    let instrucaoSql = `
        INSERT INTO resultado_quiz (acertos, acertos_historia, acertos_criador, pontos, total_perguntas, fk_usuario)
        VALUES (${acertos}, ${acertosHistoria}, ${acertosCriador}, ${pontos}, ${totalPerguntas}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarDificuldade(tabela, acertos, totalQuestoes, pontos, idResultado) {
    let instrucaoSql = `
        INSERT INTO ${tabela} (acertos, total_questoes, pontos, fk_resultado)
        VALUES (${acertos}, ${totalQuestoes}, ${pontos}, ${idResultado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTentativas(idUsuario) {
    let instrucaoSql = `
        SELECT acertos, acertos_historia, acertos_criador, pontos, total_perguntas,
            DATE_FORMAT(dt_resposta, '%d/%m %H:%i') AS data_resposta
        FROM resultado_quiz
        WHERE fk_usuario = ${idUsuario}
        ORDER BY id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaGeral() {
    let instrucaoSql = `
        SELECT ROUND(AVG(acertos), 1) AS media_acertos,
            ROUND(AVG(acertos_historia), 1) AS media_historia,
            ROUND(AVG(acertos_criador), 1) AS media_criador
        FROM resultado_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    registrarDificuldade,
    listarTentativas,
    buscarMediaGeral
};
