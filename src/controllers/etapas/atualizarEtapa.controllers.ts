import { Request, Response } from "express";
import atualizarEtapaService from "../../services/etapas/atualizarEtapa.service";


const atualizarEtapaController = async (req: Request, res: Response) => {
  const response = await atualizarEtapaService(req.params.id, req.body);

  return res.json(response);
};

export default atualizarEtapaController;
