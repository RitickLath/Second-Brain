import express from "express";
import UserRouter from "./routes/user";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ send: "heo" });
});
app.use("/ap1/v1/", UserRouter);
console.log(process.env.PORT || 3000);

app.listen(process.env.PORT || 3000);
