let curiosidadeModel = require("../models/curiosidadeModel");

function registrar(req, res) {
    let numeroCuriosidade = req.body.numeroCuriosidadeServer;
    let idUsuario = req.body.idUsuarioServer;

    if (numeroCuriosidade == undefined) {
        res.status(400).send("O número da curiosidade está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        curiosidadeModel.registrar(numeroCuriosidade, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar o sorteio! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function contarSorteios(req, res) {
    let idUsuario = req.params.idUsuario;

    curiosidadeModel.contarSorteios(idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao contar os sorteios! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    registrar,
    contarSorteios
};
