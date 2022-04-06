import express from 'express';
import router from './router';
import bodyParser from 'body-parser'
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.start();
    this.routes();
  }

  public start(): void {

    const port = 3333;
    this.app.set('Porta: ', port)
    
    this.app.listen(port, () => {
      const status = `rodando na porta ${port}`
      console.log("Status:", status);
    })
  }

  private routes(): void {
    this.app.use(bodyParser.json())
    this.app.use(router)
  }
}
export default new App().app