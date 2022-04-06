import express from 'express';
import router from './router';
import bodyParser from 'body-parser'

const mongoose = require('mongoose');
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.start();
    this.routes();
    this.connectDB();
  }

  public start(): void {

    const port = 3333;
    
    this.app.listen(port, () => {
      const status = `${port}`
      console.log("Porta:", status);
    })
  }

  connectDB = async () => {
    mongoose
        .connect('mongodb://127.0.0.1:27017/db-isabela', {
            useNewUrlParser: true,
        })
        .then(() => console.log('Conectado ao bd'))
        .catch((err) => console.error('Nao conectado ao bd'));
}

  private routes(): void {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(router)
  }
}
export default new App().app