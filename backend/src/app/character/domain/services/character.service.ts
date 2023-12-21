import { CharacterRepository } from "../../infraestructure/repositories/character.repository";
import CharacterPagResponse from "../../domain/interfaces/CharacterPagResponse.interface";

export const getCharactersService =
  (characterRepository: CharacterRepository) =>
  (
    fields: string[],
    limit: number,
    skip: number
  ): Promise<CharacterPagResponse> =>
    characterRepository.getCharacters(fields, limit, skip);

export const getCharacterDataService =
  (characterRepository: CharacterRepository) =>
  // (fields: string[], condition: any): Promise<Character> =>
  (fields: string[], condition: any): Promise<any> =>
    characterRepository.getCharacterData(fields, condition);
