import { Request, Response } from "express";
import encerrarAtendimentoService from "../../services/pedidos/encerrarAtendimento.service";

const encerrarAtendimentoController = async (req: Request, res: Response) => {
  const response = await encerrarAtendimentoService();

  return res.status(200).json(response);
};

export default encerrarAtendimentoController;
