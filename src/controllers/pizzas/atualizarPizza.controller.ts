import { Request, Response } from "express";
import atualizarPizzaService from "../../services/pizzas/atualizarPizza.service";

const atualizarPizzaController = async (req: Request, res: Response) => {
  const response = await atualizarPizzaService(req.body, req.params.id);

  return res.status(200).json(response);
};

export default atualizarPizzaController;
