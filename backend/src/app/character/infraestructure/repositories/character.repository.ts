import Character from "../../domain/models/Character";
import CharacterPagResponse from "../../domain/interfaces/CharacterPagResponse.interface";

export interface CharacterRepository {
  getCharacters(
    fields: string[],
    limit: number,
    skip: number
  ): Promise<CharacterPagResponse>;

  getCharacterData(fields: string[], condition: any): Promise<Character>;
}
