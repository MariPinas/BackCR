import { Request, Response, NextFunction } from "express";
export function validateCode(req: Request, res: Response, next: NextFunction) {
  const { code } = req.body;
  if (!code || code.length !== 6) {
    return res.status(400).json({ error: "Código inválido" });
  }
  next();
}
