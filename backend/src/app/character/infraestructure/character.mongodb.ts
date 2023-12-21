import mongoose, { Model, Document, Schema, Connection } from "mongoose";
import { Database } from "../../../helpers/my.database.helper";
import Character from "../domain/models/Character";
import { CharacterRepository } from "./repositories/character.repository";
import Dotenv from "dotenv";
Dotenv.config();

interface CharacterModel extends Document, Character {}

class CharacterSchema {
  public characterModel: Model<CharacterModel>;

  constructor(connection: Connection) {
    const characterSchema = new Schema<CharacterModel>({
      name: { type: String, required: true },
      sprites: {},
      types: [],
    });

    this.characterModel = connection.model<CharacterModel>(
      "characters",
      characterSchema
    );
  }
}

export class characterMongodbRepository implements CharacterRepository {
  private connection: Connection;
  private characterSchema: CharacterSchema;

  constructor() {
    console.log("process.env.MONGODB_DATABASE", process.env.MONGODB_DATABASE);
    this.connection = new Database(
      process.env.MONGODB_DATABASE!
    ).getConnection();
    this.characterSchema = new CharacterSchema(this.connection);
  }

  public async getCharacters(
    fields: string[],
    limit: number,
    skip: number
  ): Promise<Character[]> {
    try {
      const characters = await this.characterSchema.characterModel
        .find({}, fields)
        .limit(limit)
        .limit(skip)
        .exec();
      return characters;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      await this.connection.close();
    }
  }
}
