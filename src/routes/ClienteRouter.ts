const express = require('express');

const DadosCliente = require('../models/clienteSchema');

const router = express.Router();

router.post('/:nome/:cpf/:endereco', (req, res) => {
  try {
    let criarUsuarios = new DadosCliente({
      cliente: req.body.cliente
    });

    console.log(criarUsuarios)

    criarUsuarios.save()
      .then(() => res.json({ message: 'Usuario criado com sucesso' }))
      .catch((err) => res.json({ message: err }));

  } catch (error) {
    throw error;
  }
})

// router.get('/:idCliente', (req, res) => {
// });

export default router;