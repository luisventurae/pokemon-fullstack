import Character from "../models/Character";

export default interface CharacterPagResponse {
  characters: Character[];
  total: number;
  nextPage: number;
  previousPage: number;
}
