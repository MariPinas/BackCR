import { Request, Response, NextFunction } from "express";

export function validateName(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  try {
    console.log(`1- verificando name... ${name}`);
    if (!name || name.length < 3) {
      res.status(400).json({ error: "Nome inválido" });
    }
    if (!res.headersSent) {
      next();
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
