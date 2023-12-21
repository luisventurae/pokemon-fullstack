import Specie from "../../domain/models/Specie";

export interface SpecieRepository {
  getSpecieData(fields: string[], condition: any): Promise<Specie>;
}
