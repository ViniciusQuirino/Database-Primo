import { Router } from "express";
import criarTempoController from "../controllers/tempo/criarTempo.controller";
import atualizarTempoController from "../controllers/tempo/atualizarTempo.controller";
import recuperarTempoController from "../controllers/tempo/recuperarTempo.controller";

const tempoRoutes: Router = Router();

tempoRoutes.post("", criarTempoController);
tempoRoutes.patch("", atualizarTempoController);
tempoRoutes.get("", recuperarTempoController);

export default tempoRoutes;
