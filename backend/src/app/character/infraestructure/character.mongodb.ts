import { Model, Document, Schema, Connection } from "mongoose";
import { Database } from "../../../helpers/my.database.helper";
import Character from "../domain/models/Character";
import CharacterPagResponse from "../domain/interfaces/CharacterPagResponse.interface";
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
  ): Promise<CharacterPagResponse> {
    try {
      const characters = await this.characterSchema.characterModel
        .find({}, fields)
        .limit(limit)
        .skip(skip)
        .exec();
      const total = await this.characterSchema.characterModel
        .countDocuments({}, fields)
        .exec();
      console.log("limit", limit);
      console.log("skip", skip);
      console.log("skip / limit", skip / limit);

      const maxPages = Math.round(total / limit);
      const nextPage =
        Math.round(skip / limit) <= maxPages ? Math.round(skip / limit) + 2 : 0;
      const previousPage =
        Math.round(skip / limit) > 0 ? Math.round(skip / limit) - 1 : 0;
      return { characters, total, nextPage, previousPage };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getCharacterData(
    fields: string[],
    condition: any
  ): Promise<Character> {
    try {
      const characters = await this.characterSchema.characterModel
        .find(condition, fields)
        .limit(1)
        .exec();
      return characters[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
