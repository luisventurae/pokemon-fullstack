import { Request, Response } from "../../../helpers/middle.helper";
import { getCharacters, getCharacterData } from "../domain/services";
import Pagination from "../../common/domain/dtos/Pagination.dto";
import { successPag } from "../../../helpers/utilities/responses.util";

class CharacterController {
  async listSimpleCharacters(request: Request, response: Response) {
    const payload: Pagination = request.query;
    const limit = Number.isInteger(parseInt(payload.limit!))
      ? parseInt(payload.limit!)
      : 20;
    const offset = Number.isInteger(parseInt(payload.offset!))
      ? parseInt(payload.offset!)
      : 0;
    const { characters, total, nextPage, previousPage } = await getCharacters(
      ["name", "url"],
      limit,
      offset
    );

    const path = request.path;
    const nextPageUri = !!nextPage
      ? `${path}?limit=${limit}&offset=${offset + limit}`
      : null;
    const previousPageUri = !!previousPage
      ? `${path}?limit=${limit}&offset=${offset - limit}`
      : null;
    return response
      .status(200)
      .json(successPag(characters, total, nextPageUri, previousPageUri));
  }

  async getDataCharacter(request: Request, response: Response) {
    const pokeName: string = request.params.pokeName;
    const character = await getCharacterData(["name", "sprites", "types"], {
      name: pokeName,
    });
    return response.status(200).json(character);
  }
}

export default new CharacterController();
