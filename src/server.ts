import express from 'express';
import router from './routes/ClienteRouter';

class App {
    public app: express.Application;
  
    constructor() {
      this.app = express();
      this.start();
      this.routes();
    }
  
    public start(): void {    
      this.app.listen(3333, () => {
        console.log("Porta 3333");
      })
    }
  
    private routes(): void {
      this.app.use(router)
    }
  }
  
  export default new App().app


