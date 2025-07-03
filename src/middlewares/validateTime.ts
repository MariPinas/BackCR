import { Request, Response, NextFunction } from "express";
export function validateTime(req: Request, res: Response, next: NextFunction) {
  const { time } = req.body;

  try {
    console.log(`4- verificando hora... ${time}`);
    if (!/^\d{2}:\d{2}$/.test(time)) {
      res.status(400).json({ error: "Hora inválida" });
    }
    if (!res.headersSent) {
      next();
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
