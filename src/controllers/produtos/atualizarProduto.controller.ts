import { Request, Response } from "express";
import atualizarProdutoService from "../../services/produtos/atualizarProduto.service";

const atualizarProdutoController = async (req: Request, res: Response) => {
  const response = await atualizarProdutoService(req.body, req.params.id);

  return res.status(200).json(response);
};

export default atualizarProdutoController;
