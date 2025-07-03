import { Request, Response, NextFunction } from "express";

export function validateDate(req: Request, res: Response, next: NextFunction) {
  try {
    const { date } = req.body;
    console.log(`3- verificando data... ${date}`);
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
      res
        .status(400)
        .json({ error: "Formato de data inválido. Use YYYY-MM-DD." });
    }

    const [year, month, day] = date.split("-").map(Number);

    const parsedDate = new Date(Date.UTC(year, month - 1, day));

    const isValid =
      parsedDate.getUTCFullYear() === year &&
      parsedDate.getUTCMonth() + 1 === month &&
      parsedDate.getUTCDate() === day;

    if (!isValid) {
      res
        .status(400)
        .json({ error: "Data inválida. Essa data não existe no calendário." });
    }

    if (!res.headersSent) {
      next();
    }
  } catch (error: any) {
    res.status(400).json({ error: "Erro interno na validação de data" });
  }
}
