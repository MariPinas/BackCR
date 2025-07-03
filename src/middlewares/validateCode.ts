import { Request, Response, NextFunction } from "express";
export function validateCode(req: Request, res: Response, next: NextFunction) {
  const { code } = req.body;
  try {
    console.log(`5- verificando código... ${code}`);
    if (!code || code.length !== 6) {
      res.status(400).json({ error: "Código inválido" });
    }
    if (!res.headersSent) {
      next();
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
