let quizModel = require("../models/quizModel");

function registrar(req, res) {
    let acertos = req.body.acertosServer;
    let acertosHistoria = req.body.acertosHistoriaServer;
    let acertosCriador = req.body.acertosCriadorServer;
    let totalPerguntas = req.body.totalPerguntasServer;
    let idUsuario = req.body.idUsuarioServer;

    if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");
    } else if (acertosHistoria == undefined) {
        res.status(400).send("Os acertos de história estão undefined!");
    } else if (acertosCriador == undefined) {
        res.status(400).send("Os acertos sobre o criador estão undefined!");
    } else if (totalPerguntas == undefined) {
        res.status(400).send("O total de perguntas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {

        quizModel.registrar(acertos, acertosHistoria, acertosCriador, totalPerguntas, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao registrar o resultado do quiz! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarTentativas(req, res) {
    let idUsuario = req.params.idUsuario;

    quizModel.listarTentativas(idUsuario)
        .then(
            function (resultado) {
                res.status(200).json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as tentativas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarMediaGeral(req, res) {
    quizModel.buscarMediaGeral()
        .then(
            function (resultado) {
                res.status(200).json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar a média geral! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    registrar,
    listarTentativas,
    buscarMediaGeral
};
