import { Request, Response, NextFunction } from "express";
export function validateDate(req: Request, res: Response, next: NextFunction) {
  const { date } = req.body;

  //YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return res
      .status(400)
      .json({ error: "Formato de data inválido. Use YYYY-MM-DD." });
  }

  //Data existe?
  const [year, month, day] = date.split("-").map(Number);
  const parsedDate = new Date(date);

  if (
    parsedDate.getFullYear() !== year ||
    parsedDate.getMonth() + 1 !== month || // getMonth() retorna de 0 a 11
    parsedDate.getDate() !== day
  ) {
    return res
      .status(400)
      .json({ error: "Data inválida. Essa data não existe no calendário." });
  }
  next();
}
