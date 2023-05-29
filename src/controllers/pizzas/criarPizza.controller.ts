import { Request, Response } from "express";
import criarPizzaService from "../../services/pizzas/criarPizzas.service";

const criarPizzasController = async (req: Request, res: Response) => {
  const response = await criarPizzaService(req.body);

  return res.status(201).json(response);
};

export default criarPizzasController;
