import { router } from "../../../helpers/middle.helper";
import { listSimpleCharacters } from "./character.controller";

/**
 * Path Prefix: /api
 */
router.get("/pokemon", listSimpleCharacters);

export default router