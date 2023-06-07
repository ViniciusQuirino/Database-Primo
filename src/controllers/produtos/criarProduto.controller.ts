import { Request, Response } from "express";
import criarProdutoService from "../../services/produtos/criarProduto.service";

const criarProdutoController = async (req: Request, res: Response) => {
  const response = await criarProdutoService(req.body);

  return res.status(201).json(response);
};

export default criarProdutoController;
