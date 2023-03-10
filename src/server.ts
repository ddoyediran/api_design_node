import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { createJWT, protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", protect, router);
app.post("/users", createNewUser);
app.post("/signin", signin);

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use((err, req, res, next) => {
  if (err.status === "auth") {
    res.status(401).json({ message: "unauthorized" });
  } else if (err.status === "input") {
    res.status(400).json({ message: "invalid input" });
  } else {
    res.status(500).json({ message: "oops that is on us!" });
  }
});

export default app;
