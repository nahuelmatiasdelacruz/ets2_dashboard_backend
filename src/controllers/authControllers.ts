import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response): Promise<void> => {
  res.json({msg: "Login succeful"})
}