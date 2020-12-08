const express=require('express');
const router=express.Router();
const controller=require('../controller/compra.controller');
router.get('/teste', controller.teste);
router.post('/criar', controller.criar);
router.post('/alterar/:id', controller.alterar);
router.get('/listar', controller.listar);
router.get('/listar-um/:id', controller.listarUm);
router.delete('/deletar/:id', controller.deletar);

module.exports=router;