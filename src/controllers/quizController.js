let quizModel = require("../models/quizModel");

function registrar(req, res) {
    let acertos = req.body.acertosServer;
    let acertosHistoria = req.body.acertosHistoriaServer;
    let acertosCriador = req.body.acertosCriadorServer;
    let pontos = req.body.pontosServer;
    let totalPerguntas = req.body.totalPerguntasServer;
    let idUsuario = req.body.idUsuarioServer;

    let acertosFacil = req.body.acertosFacilServer;
    let acertosMedia = req.body.acertosMediaServer;
    let acertosDificil = req.body.acertosDificilServer;
    let totalFacil = req.body.totalFacilServer;
    let totalMedia = req.body.totalMediaServer;
    let totalDificil = req.body.totalDificilServer;

    if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");
    } else if (acertosHistoria == undefined) {
        res.status(400).send("Os acertos de história estão undefined!");
    } else if (acertosCriador == undefined) {
        res.status(400).send("Os acertos sobre o criador estão undefined!");
    } else if (pontos == undefined) {
        res.status(400).send("Os pontos estão undefined!");
    } else if (totalPerguntas == undefined) {
        res.status(400).send("O total de perguntas está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (acertosFacil == undefined || acertosMedia == undefined || acertosDificil == undefined) {
        res.status(400).send("Os acertos por dificuldade estão undefined!");
    } else if (totalFacil == undefined || totalMedia == undefined || totalDificil == undefined) {
        res.status(400).send("O total de questões por dificuldade está undefined!");
    } else {

        quizModel.registrar(acertos, acertosHistoria, acertosCriador, pontos, totalPerguntas, idUsuario)
            .then(
                function (resultado) {
                    // insertId é o id que o banco gerou para essa tentativa
                    let idResultado = resultado.insertId;

                    return quizModel.registrarDificuldade("resultado_facil", acertosFacil, totalFacil, acertosFacil * 10, idResultado)
                        .then(function () {
                            return quizModel.registrarDificuldade("resultado_media", acertosMedia, totalMedia, acertosMedia * 20, idResultado);
                        })
                        .then(function () {
                            return quizModel.registrarDificuldade("resultado_dificil", acertosDificil, totalDificil, acertosDificil * 30, idResultado);
                        })
                        .then(function () {
                            res.json(resultado);
                        });
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
