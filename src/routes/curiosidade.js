let express = require("express");
let router = express.Router();

let curiosidadeController = require("../controllers/curiosidadeController");

router.post("/registrar", function (req, res) {
    curiosidadeController.registrar(req, res);
});

router.get("/total/:idUsuario", function (req, res) {
    curiosidadeController.contarSorteios(req, res);
});

module.exports = router;
