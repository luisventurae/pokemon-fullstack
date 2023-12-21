import Character from "../../domain/models/Character";
import { Connection } from "mongoose";

export interface CharacterRepository {
  getCharacters(
    fields: string[],
    limit: number,
    skip: number
  ): Promise<Character[]>;
}
