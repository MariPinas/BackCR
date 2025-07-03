import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";

const authService = new AuthService();

export function login(req: Request, res: Response) {
  const { name } = req.body;
  try {
    if (res.headersSent) return;
    const user = authService.validateUser(name);
    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json({ message: "Acesso autorizado com sucesso!" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
