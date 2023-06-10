import { Request, Response } from "express";
import ativarChatbotService from "../../services/etapas/ativarChatbot.service";

const ativarChatbotController = async (req: Request, res: Response) => {
  const response = await ativarChatbotService();

  return res.status(200).json(response);
};

export default ativarChatbotController;
