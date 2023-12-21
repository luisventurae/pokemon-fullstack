import { getCharactersService } from "./character.service";
import { characterRepository } from "../../infraestructure/index";

const characterRepo = new characterRepository();

export const getCharacters = getCharactersService(characterRepo);
