import express, { Application } from "express";
import { Database } from "./helpers/my.database.helper";
import Dotenv from "dotenv";
import cors from "cors";
import routesDefault from "./app/default/application/default.routes";
import routesCharacter from "./app/character/application/character.routes";
import routesSpecie from "./app/specie/application/specie.routes";

Dotenv.config();

class Server {
  public app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.listening();
    this.testConnectDB();
    this.middlewares();
    this.routes();
  }

  listening = () => {
    this.app.listen(this.port, () =>
      console.log(`Running in PORT: ${this.port}`)
    );
  };

  testConnectDB = () => {
    const database: Database = new Database(process.env.DATABASE!);
    database.open();
    // database.close();
  };

  routes = () => {
    this.app.use(cors({ origin: "*" }));
    this.app.use("/", routesDefault);
    this.app.use("/api", routesCharacter);
    this.app.use("/api", routesSpecie);
  };

  middlewares = () => {
    this.app.use(express.json());
  };
}

export default Server;
