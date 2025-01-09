import express from "express";
import UserRouter from "./routes/user";
import "dotenv/config";
// @ts-ignore
import DatabaseConnect from "./config/db.js";

const app = express();
app.use(express.json());

app.use("/ap1/v1/", UserRouter);

const Server = async () => {
  try {
    await DatabaseConnect();
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server Stared at PORT: 3000");
    });
  } catch (e) {}
};

Server();
