import mongoose, { Model, Document, Schema, Connection } from "mongoose";
import { Database } from "../../../helpers/my.database.helper";
import Character from "../domain/models/Character";
import { CharacterRepository } from "./repositories/character.repository";
import Dotenv from "dotenv";
Dotenv.config();

interface CharacterModel extends Document, Character {}

class CharacterSchema {
  private characterModel: Model<CharacterModel>;

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

  async findCharacters(): Promise<Character[]> {
    return this.characterModel.find().limit(20).exec();
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

  public getConnection(): Connection {
    return this.connection;
  }

  public async getCharacters(): Promise<Character[]> {
    console.log("getCharactersRepository");
    try {
      console.log(
        "this.getConnection().readyState",
        this.getConnection().readyState
      );

      const characters = await this.characterSchema.findCharacters();
      console.log("characters", characters);

      return characters;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      await this.connection.close();
    }
  }
}
