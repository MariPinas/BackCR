import { Request, Response, NextFunction } from "express";
export function validateTime(req: Request, res: Response, next: NextFunction) {
  const { time } = req.body;
  if (!/^\d{2}:\d{2}$/.test(time)) {
    return res.status(400).json({ error: "Hora inválida" });
  }
  next();
}
