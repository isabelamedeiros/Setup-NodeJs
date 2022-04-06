const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema(
    {
      cliente: {
          idCliente: Number,
          nome: String,
      endereco: {  
          idEndereco: Number,
          endereco: String,
          numero: Number,
          bairro: String,
          cidade: String,
          estado: String,
        tipo: ['RESIDENCIAL','TRABALHO']
      },
          cpf: String,
          id: String
          }
      });

      module.exports = mongoose.model('DadosCliente', ClienteSchema);