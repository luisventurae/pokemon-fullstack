import { Model, Document, Schema, Connection } from "mongoose";
import { Database } from "../../../helpers/my.database.helper";
import Specie from "../domain/models/Specie";
import { SpecieRepository } from "./repositories/specie.repository";
import Dotenv from "dotenv";
Dotenv.config();

interface SpecieModel extends Document, Specie {}

class CharacterSchema {
  public specieModel: Model<SpecieModel>;

  constructor(connection: Connection) {
    const specieSchema = new Schema<SpecieModel>({
      name: { type: String, required: true },
    });
    this.specieModel = connection.model<SpecieModel>("species", specieSchema);
  }
}

export class specieMongodbRepository implements SpecieRepository {
  private connection: Connection;
  private specieSchema: CharacterSchema;

  constructor() {
    console.log("process.env.MONGODB_DATABASE", process.env.MONGODB_DATABASE);
    this.connection = new Database(
      process.env.MONGODB_DATABASE!
    ).getConnection();
    this.specieSchema = new CharacterSchema(this.connection);
  }

  public async getSpecieData(
    fields: string[],
    condition: any
  ): Promise<Specie> {
    try {
      const species = await this.specieSchema.specieModel
        .find(condition, fields)
        .limit(1)
        .exec();
      return species[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
