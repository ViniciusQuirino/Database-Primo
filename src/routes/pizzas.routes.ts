import { Router } from "express";
import criarPizzaController from "../controllers/pizzas/criarPizza.controller";
import listarPizzasController from "../controllers/pizzas/listarPizzas.controller";
import atualizarPizzaController from "../controllers/pizzas/atualizarPizza.controller";

const pizzasRoutes: Router = Router();

pizzasRoutes.post("", criarPizzaController);
pizzasRoutes.get("", listarPizzasController);
pizzasRoutes.patch("/:id", atualizarPizzaController);
// etapasRoutes.delete("", deletarEtapaController);

export default pizzasRoutes;
