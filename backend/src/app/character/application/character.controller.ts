import { Request, Response } from "../../../helpers/middle.helper";
import { getCharacters } from "../domain/services";
import Pagination from "../domain/dtos/Pagination.dto";

export const listSimpleCharacters = async (
  request: Request,
  response: Response
) => {
  console.log("request.query", request.query);
  const payload: Pagination = request.query;
  const limit = Number.isInteger(payload.limit) ? Number(payload.limit) : 20;
  const offset = Number.isInteger(payload.offset) ? Number(payload.offset) : 0;
  const characters = await getCharacters(["name", "url"], limit, offset);
  return response.status(200).json(characters);
};
