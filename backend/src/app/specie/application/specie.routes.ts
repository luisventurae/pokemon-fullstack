import { router } from "../../../helpers/middle.helper";
import SpecieController from "./specie.controller";

/**
 * Path Prefix: /api
 */
router.get("/pokemon-species/:pokeName", SpecieController.getDataSpecie);

export default router;
