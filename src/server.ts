import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", router);

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;
