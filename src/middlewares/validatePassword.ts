import { Request, Response, NextFunction } from "express";
export function validatePassword(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { password } = req.body;
  const regex = /^(?=.*[A-Z])(?=.*[@]).{6,}$/;

  if (!password || !regex.test(password)) {
    return res.status(400).json({ error: "Senha inválida" });
  }

  next();
}
