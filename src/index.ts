import express from "express";
import { validateName } from "./middlewares/validateName";
import { validatePassword } from "./middlewares/validatePassword";
import { validateDate } from "./middlewares/validateDate";
import { validateTime } from "./middlewares/validateTime";
import { validateCode } from "./middlewares/validateCode";
import { login } from "./controller/AuthController";

const app = express();
app.use(express.json());

app.post(
  "/login",
  validateName,
  validatePassword,
  validateDate,
  validateTime,
  validateCode,
  login
);

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));
