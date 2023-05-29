import { Request, Response } from "express";
import recuperarEtapaService from "../../services/etapas/recuperarEtapa.service";

const recuperarEtapaController = async (req: Request, res: Response) => {
  const response = await recuperarEtapaService(req.params.id);
  return res.status(200).json(response);
};

export default recuperarEtapaController;
