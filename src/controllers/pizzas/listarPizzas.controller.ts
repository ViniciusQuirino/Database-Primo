import { Request, Response } from "express";
import listarPizzasService from "../../services/pizzas/listarPizzas.service";

const listarPizzasController = async (req: Request, res: Response) => {
  const response = await listarPizzasService();

  return res.status(200).json(response);
};

export default listarPizzasController;
