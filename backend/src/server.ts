import express, { Application } from "express";

class Server {
  public app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.listening();
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  listening = () => {
    this.app.listen(this.port, () =>
      console.log(`Running in PORT: ${this.port}`)
    );
  };

  connectDB = () => {};

  routes = () => {};

  middlewares = () => {
    this.app.use(express.json());
  };
}

export default Server;
