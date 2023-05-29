import { Request, Response } from "express";
import criarTempoService from "../../services/tempo/criarTempo.service";

const criarTempoController = async (req: Request, res: Response) => {
  const response = await criarTempoService(req.body);

  return res.status(201).json(response);
};
export default criarTempoController;
