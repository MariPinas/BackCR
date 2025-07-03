import { Request, Response, NextFunction } from "express";
export function validatePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body;
  const regex = /^(?=.*[A-Z])(?=.*[@]).{6,}$/;
  try {
    console.log(`2- verificando senha...`);
    if (!password || !regex.test(password)) {
      res.status(400).json({ error: "Senha inválida" });
    }

    if (!res.headersSent) {
      next();
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
