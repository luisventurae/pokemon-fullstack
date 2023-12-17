import express, { Application } from "express";
import { Database } from "./helpers/my.database.helper";
import Dotenv from "dotenv";
import cors from "cors";
import routesDefault from "./app/default/application/default.routes";

Dotenv.config();

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

  connectDB = () => {
    const database: Database = new Database(process.env.DATABASE!);
    database.open();
    // database.close();
  };

  routes = () => {
    this.app.use(cors({ origin: "*" }));
    this.app.use("/", routesDefault);
  };

  middlewares = () => {
    this.app.use(express.json());
  };
}

export default Server;
