import { Request, Response } from "express";
import listarPedidosService from "../../services/pedidos/listarPedidos.service";

const listarPedidosController = async (req: Request, res: Response) => {
  const response = await listarPedidosService(req.params.date);

  return res.status(200).json(response);
};

export default listarPedidosController;
