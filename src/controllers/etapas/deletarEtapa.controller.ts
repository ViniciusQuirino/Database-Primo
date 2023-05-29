import { Request, Response } from "express";
import deletarEtapaService from "../../services/etapas/deletarEtapa.service";

const deletarEtapaController = async (req: Request, res: Response) => {
  await deletarEtapaService();

  return res.status(204).json({});
};

export default deletarEtapaController;
