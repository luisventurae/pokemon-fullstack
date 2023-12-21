import { SpecieRepository } from "../../infraestructure/repositories/specie.repository";
import Specie from "../../domain/models/Specie";

export const getSpecieDataService =
  (characterRepository: SpecieRepository) =>
  (fields: string[], condition: any): Promise<Specie> =>
    characterRepository.getSpecieData(fields, condition);
