import { Request, Response } from "express";
import atualizarPedidoService from "../../services/pedidos/atualizarPedido.service";

const atualizarPedidoController = async (req: Request, res: Response) => {
  const response = await atualizarPedidoService(req.body);

  return res.status(200).json(response);
};

export default atualizarPedidoController;
