import { Request, Response } from "express";
import atualizarTempoService from "../../services/tempo/atualizarTempo.service";

const atualizarTempoController = async (req: Request, res: Response) => {
  const response = await atualizarTempoService(req.body);

  return res.json(response);
};

export default atualizarTempoController;
