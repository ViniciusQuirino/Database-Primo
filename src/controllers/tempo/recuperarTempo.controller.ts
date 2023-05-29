import { Request, Response } from "express";
import recuperarTempoService from "../../services/tempo/recuperarTempo.service";

const recuperarTempoController = async (req: Request, res: Response) => {
  const response = await recuperarTempoService();
  return res.status(200).json(response);
};

export default recuperarTempoController;
