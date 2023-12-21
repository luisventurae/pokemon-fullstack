import { getSpecieDataService } from "./specie.service";
import { specieRepository } from "../../infraestructure";

const characterRepo = new specieRepository();

export const getSpecieData = getSpecieDataService(characterRepo);
