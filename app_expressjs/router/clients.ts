import Router = require("express");
import clientsController = require("../controller/clientsController");

const router = Router();

router.get('/', clientsController.index);

router.get('/sobrenos', (req, res) =>{
    res.send("Rota falando sobre a empresa")
});

router.get('/trabalheconosco', (req, res) =>{
    res.send("Opções de vagas")
});

router.get('/contato', (req, res) =>{
    res.send("(xx) xxxxx-xxxx")
});

export = router;