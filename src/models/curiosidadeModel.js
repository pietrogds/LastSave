let database = require("../database/config");

function registrar(numeroCuriosidade, idUsuario) {
    let instrucaoSql = `
        INSERT INTO sorteio_curiosidade (numero_curiosidade, fk_usuario)
        VALUES (${numeroCuriosidade}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarSorteios(idUsuario) {
    let instrucaoSql = `
        SELECT COUNT(*) AS total
        FROM sorteio_curiosidade
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    contarSorteios
};
