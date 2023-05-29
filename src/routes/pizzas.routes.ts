import { Router } from "express";
import criarPizzasController from "../controllers/pizzas/criarPizza.controller";

const pizzasRoutes: Router = Router();

pizzasRoutes.post("", criarPizzasController);
// etapasRoutes.get("/:id", recuperarEtapaController);
// etapasRoutes.patch("/:id", atualizarEtapaController);
// etapasRoutes.delete("", deletarEtapaController);

export default pizzasRoutes;
