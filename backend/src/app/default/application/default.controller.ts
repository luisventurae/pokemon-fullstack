import { Request, Response } from "../../../helpers/middle.helper";

export const getDefault = (request: Request, response: Response) => {
  response.json({ msg: "API Working" });
};
