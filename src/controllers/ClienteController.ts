const DadosCliente = require('../models/clienteSchema');

exports.postCliente = (req, res) => {
    try {

        let criarUsuarios = new DadosCliente({
            cliente: req.body.cliente
        });

        criarUsuarios.save()
            .then(() => res.json({ message: 'Usuario criado com sucesso' }))
            .catch((err) => res.json({ message: err }));

        console.log("Usuario salvo no BD: ", criarUsuarios)
    } catch (error) {
        throw error;
    }
}

exports.getCliente = (req, res) => {
    DadosCliente.find({ cpf: req.params.cpf }, (err, items) => {
        if (err) res.status(500).send(Error)
        res.status(200).json(items);
    });
}

exports.putCliente = (req, res) => {
    DadosCliente.find({ cpf: req.params.cpf }).then(result => {
        console.log(result);
        res.status(200).json({ message: "idCliente alterado" });
    });
}

exports.deleteCliente = (req, res) => {
    DadosCliente.deleteOne({ cpf: req.params.cpf }).then(result => {
        console.log(result);
        res.status(200).json({ message: "idCliente deletado" });
    });
}