import { Request, Response } from "../../../helpers/middle.helper";
import { getSpecieData } from "../domain/services";

class SpecieController {
  async getDataSpecie(request: Request, response: Response) {
    const pokeName: string = request.params.pokeName;
    const specie = await getSpecieData(["name", "evolves_from_species"], {
      name: pokeName,
    });
    return response.status(200).json(specie);
  }
}

export default new SpecieController();
