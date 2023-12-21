import { Request, Response } from "../../../helpers/middle.helper";
import { getCharacters } from "../domain/services";

export const listSimpleCharacters = async (
  request: Request,
  response: Response
) => {
  console.log("request.body", request.body);
  // const characters = await getCharacters(request.body);
  const characters = await getCharacters();
  console.log("listSimpleCharacters");

  return response.status(200).json(characters);
};
