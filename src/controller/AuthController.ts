import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export function login(req: Request, res: Response) {
  const { name } = req.body;
  const user = authService.validateUser(name);

  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  res.status(200).json({ message: "Acesso autorizado com sucesso!" });
}
