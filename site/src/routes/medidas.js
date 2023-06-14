var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/qtd_votos/:X", function (req, res) {
    medidaController.qtd_votos(req, res);
});

router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;