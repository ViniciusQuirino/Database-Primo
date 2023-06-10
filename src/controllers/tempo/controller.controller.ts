import { Request, Response } from "express";

const controllerController = async (req: Request, res: Response) => {
  return res.status(201).json({ oi: "oi" });
};
export default controllerController;
