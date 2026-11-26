let express = require("express");
let router = express.Router();

let quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrar(req, res);
});

router.get("/tentativas/:idUsuario", function (req, res) {
    quizController.listarTentativas(req, res);
});

router.get("/media-geral", function (req, res) {
    quizController.buscarMediaGeral(req, res);
});

module.exports = router;
