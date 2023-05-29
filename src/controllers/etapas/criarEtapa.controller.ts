import { Request, Response } from "express";
import criarEtapaService from "../../services/etapas/criarEtapa.service";

const criarEtapaController = async (req: Request, res: Response) => {
  const response = await criarEtapaService(req.body);

  return res.status(201).json(response);
};

export default criarEtapaController;
