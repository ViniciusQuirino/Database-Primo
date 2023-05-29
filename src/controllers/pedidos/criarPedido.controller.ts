import { Request, Response } from "express";
import criarPedidoService from "../../services/pedidos/criarPedido.service";

const criarPedidoController = async (req: Request, res: Response) => {
  const response = await criarPedidoService(req.body);

  return res.status(201).json(response);
};

export default criarPedidoController;
