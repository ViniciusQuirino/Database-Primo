import { Request, Response } from "express";
import recuperarPedidoService from "../../services/pedidos/recuperarPedido.service";

const recuperarPedidoController = async (req: Request, res: Response) => {
  const response = await recuperarPedidoService(req.params.telefone);
  return res.status(200).json(response);
};

export default recuperarPedidoController;
