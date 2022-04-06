const express = require('express');

const clienteController = require('../controllers/clienteController');

const router = express.Router();

router.post('/:nome/:cpf/:endereco', clienteController.postCliente)

router.get('/:cpf', clienteController.getCliente);

router.put('/:cpf', clienteController.putCliente);

router.delete('/:cpf', clienteController.deleteCliente);

export default router;