import { Request, Response } from "express";
import deletarPedidosService from "../../services/pedidos/deletarPedidos.service";

const deletarPedidosController = async (req: Request, res: Response) => {
  await deletarPedidosService();

  return res.status(204).json({});
};
export default deletarPedidosController;
