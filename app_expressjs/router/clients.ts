import Router = require("express");

const router = Router();

router.get('/', (req, res) =>{
    res.send("Rota inicial")
});

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