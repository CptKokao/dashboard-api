import express from "express";

const app = express();
const port = 8000;

app.get("/hello", (req, res) => {
  res.end("Привет");
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
