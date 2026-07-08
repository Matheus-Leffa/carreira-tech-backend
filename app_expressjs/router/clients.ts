import { Router } from "express";
import clientsController from "../controller/clientsController.js";

const router = Router();

router.get('/', clientsController.index);
router.get('/:id', clientsController.show);

router.get('/create', clientsController.create);
router.post('/create', clientsController.store);

router.get('/edit/:id', clientsController.edit);
router.post('/edit/:id', clientsController.update);

router.get('/del/:id', clientsController.del);

router.get('/trabalheconosco', (req, res) =>{
    res.send("Opções de vagas")
});

router.get('/contato', (req, res) =>{
    res.send("(xx) xxxxx-xxxx")
});

export default router;