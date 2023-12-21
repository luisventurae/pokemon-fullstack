import {
  getCharactersService,
  getCharacterDataService,
} from "./character.service";
import { characterRepository } from "../../infraestructure";

const characterRepo = new characterRepository();

export const getCharacters = getCharactersService(characterRepo);
export const getCharacterData = getCharacterDataService(characterRepo);
