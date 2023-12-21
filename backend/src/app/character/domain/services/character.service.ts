import { CharacterRepository } from "../../infraestructure/repositories/character.repository";
import CharacterPagResponse from "../../domain/interfaces/CharacterPagResponse.interface";
import Character from "../../domain/models/Character";

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
  (fields: string[], condition: any): Promise<Character> =>
    characterRepository.getCharacterData(fields, condition);
