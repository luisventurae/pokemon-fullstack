import Character from "../../domain/models/Character";
import { Connection } from "mongoose";

export interface CharacterRepository {
  getConnection(): Connection;
  getCharacters(): Promise<Character[]>;
}
