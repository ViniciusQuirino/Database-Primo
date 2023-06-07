import { Request, Response } from "express";
import listarProdutosService from "../../services/produtos/listarProdutos.service";

const listarProdutosController = async (req: Request, res: Response) => {
  const response = await listarProdutosService();

  return res.status(200).json(response);
};

export default listarProdutosController;
