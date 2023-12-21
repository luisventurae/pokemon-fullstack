import { CharacterRepository } from "../../infraestructure/repositories/character.repository";
import Character from "../models/Character";

export const getCharactersService =
  (characterRepository: CharacterRepository) =>
  (fields: string[], limit: number, skip: number): Promise<Character[]> =>
    characterRepository.getCharacters(fields, limit, skip);
