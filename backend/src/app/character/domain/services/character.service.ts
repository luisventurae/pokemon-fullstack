import { CharacterRepository } from "../../infraestructure/repositories/character.repository";
import Character from "../models/Character";

export const getCharactersService =
  (characterRepository: CharacterRepository) => (): Promise<Character[]> =>
    characterRepository.getCharacters();
