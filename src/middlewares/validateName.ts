import { Request, Response, NextFunction } from "express";

export function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (!name || name.length < 3) {
    return res.status(400).json({ error: "Nome inválido" });
  }
  next();
}
