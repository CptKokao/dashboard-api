import express from "express";
import { HTTPError } from "../errors/http-error.class";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("Обработчик users");
  next();
});

userRouter.use("login", (req, res, next) => {
  next(new HTTPError(401, "Ошибка авторизации"));
  // res.send("login");
});

userRouter.use("register", (req, res, next) => {
  res.send("register");
});

export { userRouter };
