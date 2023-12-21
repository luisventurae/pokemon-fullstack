import { router } from "../../../helpers/middle.helper";
import CharacterController from "./character.controller";

/**
 * Path Prefix: /api
 */
router.get("/pokemon", CharacterController.listSimpleCharacters);
router.get("/pokemon/:pokeName", CharacterController.getDataCharacter);

export default router;
