import { Router } from "express";
import criarEtapaController from "../controllers/etapas/criarEtapa.controller";
import recuperarEtapaController from "../controllers/etapas/recuperarEtapa.controller";
import atualizarEtapaController from "../controllers/etapas/atualizarEtapa.controllers";
import deletarEtapaController from "../controllers/etapas/deletarEtapa.controller";

const etapasRoutes: Router = Router();

etapasRoutes.post("", criarEtapaController);
etapasRoutes.get("/:id", recuperarEtapaController);
etapasRoutes.patch("/:id", atualizarEtapaController);
etapasRoutes.delete("", deletarEtapaController);

export default etapasRoutes;
