import mongoose, { Connection, ConnectOptions } from "mongoose";

class Database {
  private connection: Connection;
  private dbName: string;

  constructor(dbName: string) {
    const options: ConnectOptions = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    };
    this.connection = mongoose.createConnection(
      process.env.MONGODB_URI!,
      options
    );
    this.dbName = dbName;
  }

  async open(): Promise<void> {
    this.connection.useDb(this.dbName);
  }

  async close(): Promise<void> {
    await mongoose.disconnect();
    console.log("Conexión a MongoDB cerrada");
  }
}

export default Database;
