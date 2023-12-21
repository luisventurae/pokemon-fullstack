import { getCharactersService } from "./character.service";
import { characterRepository } from "../../infraestructure";

const characterRepo = new characterRepository();

export const getCharacters = getCharactersService(characterRepo);
